#include<bits/stdc++.h>
#include<windows.h>
using namespace std;

string tag_name,tag_chinese_name;
vector<string> TAG_name,TAG_chinese_name;

char* UTF8ToGB(const char* utf8)
{
	int len = MultiByteToWideChar(CP_UTF8, 0, utf8, -1, NULL, 0);
	wchar_t* wstr = new wchar_t[len+1];
	memset(wstr, 0, len+1);
	MultiByteToWideChar(CP_UTF8, 0, utf8, -1, wstr, len);
	len = WideCharToMultiByte(CP_ACP, 0, wstr, -1, NULL, 0, NULL, NULL);
	char* str = new char[len+1];
	memset(str, 0, len+1);
	WideCharToMultiByte(CP_ACP, 0, wstr, -1, str, len, NULL, NULL);
	if(wstr) delete[] wstr;
	return str;
}
char* GBToUTF8(const char* gb2312)
{
	int len = MultiByteToWideChar(CP_ACP, 0, gb2312, -1, NULL, 0);
	wchar_t* wstr = new wchar_t[len+1];
	memset(wstr, 0, len+1);
	MultiByteToWideChar(CP_ACP, 0, gb2312, -1, wstr, len);
	len = WideCharToMultiByte(CP_UTF8, 0, wstr, -1, NULL, 0, NULL, NULL);
	char* str = new char[len+1];
	memset(str, 0, len+1);
	WideCharToMultiByte(CP_UTF8, 0, wstr, -1, str, len, NULL, NULL);
	if(wstr) delete[] wstr;
	return str;
}

void PRINT_HEAD(string title){
	cout<<"<head><meta http-equiv=\"content-type\" content=\"text/html;charset=gbk\" /><meta charset=\"UTF-8\"><title>x��x �� blog - ����һ��</title><link rel=\"icon\" type=\"images/png\" sizes=\"32x32\" href=\"/images/favicon32.png\"><link rel=\"icon\" type=\"images/png\" sizes=\"32x32\" href=\"/images/favicon16.png\"><link rel=\"stylesheet\" href=\"/css/main.css\"></head>\n";
	cout<<"<div class=\"cover\"></div><div class=\"title\"><h1>x��x ������ BLOG</h1><p>�������ڣ�"<<title<<"</p></div>\n";
	cout<<"<div class=\"bodybody\"><div class=\"sidebar\"><div class=\"content-block\"><div class=\"content\"><center><p>���������ǵ���Ʊ��Ҳ�ǿ��Եİɣ�</p></center><a href=\"/\"><strong>�� �ص���ҳ</strong></a><p></p><a href=\"/archieve/\"><strong>�� ����һ��</strong></a><p></p><a href=\"/tags/\"><strong>�� ��ǩһ��</strong></a><p></p><a href=\"/songlist/\"><strong>�� ����������</strong></a></div></div></div>\n";
}

void PRINT_TAG_INFO(){
	cout<<"<tr><th><a href=\"/tags/"<<tag_name<<"/\"><strong>"<<tag_chinese_name<<"</strong></a></th><th>"<<tag_name<<"</th></tr>\n";
} 

string post_name,post_chinese_name,type_name;
string post_tag[20];int tag_cnt;
map<string,string> TAG;
string trash;
void PRINT_POST_INFO(){
	cout<<"<tr><th><a href=\"/posts/"<<post_name<<".html\"><strong>"<<post_chinese_name<<"</strong></a></th>\n";
	
	if(type_name=="solution")
		cout<<"<th><a href=\"/archieve/solution/\"><strong>���</strong></a></th>\n";
	else if(type_name=="algorithm")
		cout<<"<th><a href=\"/archieve/algorithm/\"><strong>�㷨</strong></a></th>\n";
	else
		cout<<"<th><p>��</p></th>\n";
	
	if(tag_cnt==0) cout<<"<th><p>��</p></th>\n";
	else{
		cout<<"<th>";
		for(int i=1;i<=tag_cnt;i++){
			cout<<"<a href=\"/tags/"<<post_tag[i]<<"/\"><strong>";
			if(!TAG.count(post_tag[i])){cerr<<"ERROR tag not found "<<post_tag[i]<<"\n";exit(0);}
			cout<<TAG[post_tag[i]]<<"</strong></a>";
			if(i!=tag_cnt) cout<<" ";
		}
		cout<<"</th>\n";
	}
}

int main(){
	//tags.index
	freopen("D:\\����blog\\tags\\list.txt","r",stdin);
	freopen("D:\\����blog\\tags\\index.html","w",stdout);
	PRINT_HEAD("��ǩһ��");
	cout<<"<div class=\"post-block\"><div class=\"content-block\"><center><h1>��ǩһ��</h1></center><center><table border=\"1\" style=\"width: 70%;\"><tr><th style=\"width: 40%\">����</th><th style=\"width: 60%\">Ӣ����</th></tr>\n";
	while(getline(cin,tag_name)){
		cerr<<"check "<<tag_name<<"\n";
		getline(cin,tag_chinese_name);
		tag_chinese_name=UTF8ToGB(tag_chinese_name.c_str());
		PRINT_TAG_INFO();
		TAG_name.push_back(tag_name);TAG_chinese_name.push_back(tag_chinese_name);
		TAG[tag_name]=tag_chinese_name;
	}
	cout<<"</table></center></div></div></div>\n";
	//tags.tag_name.index
	for(int i=0;i<TAG_name.size();i++){
		tag_name=TAG_name[i],tag_chinese_name=TAG_chinese_name[i];
		//��ָ��·�� 
		char pth[200],com[200];int j;
		j=sprintf(pth,"D:\\����blog\\tags\\");
		for(int j0=0;j0<tag_name.size();j0++) j+=sprintf(pth+j,"%c",tag_name[j0]);
		sprintf(com,"mkdir %s",pth);
		system(com);
		j+=sprintf(pth+j,"\\index.html");
		freopen(pth,"w",stdout);
		
		PRINT_HEAD("��ǩ��"+tag_chinese_name);
		cout<<"<div class=\"post-block\"><div class=\"content-block\"><center><h1>���� "<<tag_chinese_name<<" ��ǩ��ҳ��</h1></center><center><table border=\"1\" style=\"width: 100%;\"><tr><th style=\"width:40%\">����</th><th style=\"width:20%\">����</th><th style=\"width:40%\">��ǩ</th></tr>\n";
		cin.clear();
		freopen("D:\\����blog\\archieve\\list.txt","r",stdin);
		bool FLG=0;
		while(getline(cin,post_name)){
			getline(cin,post_chinese_name);
			post_chinese_name=UTF8ToGB(post_chinese_name.c_str());
			getline(cin,type_name);
			cin>>tag_cnt;getline(cin,trash);
			bool flg=0;
			for(int i=1;i<=tag_cnt;i++){getline(cin,post_tag[i]);if(post_tag[i]==tag_name) flg=1;}
			if(flg) PRINT_POST_INFO(),FLG=1;
		}
		cout<<"</table>\n";
		if(!FLG) cout<<"<h2>����ʲô��û���ҵ��� QAQ</h2>";
		cout<<"</center></div></div></div>\n";
	}
}
