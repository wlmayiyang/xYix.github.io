#include<bits/stdc++.h>
#include<windows.h>
using namespace std;

string post_name,post_chinese_name,type_name;
string post_tag[20];int tag_cnt;
map<string,string> TAG;
string trash;

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

int main(){
	/*
		list ��ʽ��
		- Ӣ����
		- ������ 
		- ����
		- ��ǩ�� 
		- ��ǩ 
	*/
	
	freopen("D:\\����blog\\tags\\list.txt","r",stdin);
	string tmp_tag_name,tmp_tag_chinese_name;
	while(getline(cin,tmp_tag_name)){
		getline(cin,tmp_tag_chinese_name);
		tmp_tag_chinese_name=UTF8ToGB(tmp_tag_chinese_name.c_str());
		TAG[tmp_tag_name]=tmp_tag_chinese_name;
	}
	cin.clear();
	freopen("D:\\����blog\\posts\\list.txt","r",stdin);
	freopen("D:\\����blog\\archieve\\index.html","w",stdout);
	cout<<"<head><meta http-equiv=\"content-type\" content=\"text/html;charset=gbk\" /><meta charset=\"UTF-8\"><title>x��x �� blog - ����һ��</title><link rel=\"icon\" type=\"images/png\" sizes=\"32x32\" href=\"/images/favicon32.png\"><link rel=\"icon\" type=\"images/png\" sizes=\"32x32\" href=\"/images/favicon16.png\"><link rel=\"stylesheet\" href=\"/css/main.css\"></head>\n";
	cout<<"<div class=\"cover\"></div><div class=\"title\"><h1>x��x ������ BLOG</h1><p>�������ڣ�����һ��</p></div>\n";
	cout<<"<div class=\"bodybody\"><div class=\"sidebar\"><div class=\"content-block\"><div class=\"content\"><center><p>���������ǵ���Ʊ��Ҳ�ǿ��Եİɣ�</p></center><a href=\"/\"><strong>�� �ص���ҳ</strong></a><p></p><a href=\"/archieve/\"><strong>�� ����һ��</strong></a><p></p><a href=\"/tags/\"><strong>�� ��ǩһ��</strong></a><p></p><a href=\"/songlist/\"><strong>�� ����������</strong></a></div></div></div>\n";
	cout<<"<div class=\"post-block\"><div class=\"content-block\"><center><h1>����һ��</h1></center><center><h2>�� 2020/10</h2></center><center><table border=\"1\" style=\"width: 100%;\"><tr><th>����</th><th>����</th><th>��ǩ</th></tr>\n";
	while(getline(cin,post_name)){
		cerr<<"check "<<post_name<<"\n";
		getline(cin,post_chinese_name);
		post_chinese_name=UTF8ToGB(post_chinese_name.c_str());
		getline(cin,type_name);
		cin>>tag_cnt;getline(cin,trash);
		for(int i=1;i<=tag_cnt;i++) getline(cin,post_tag[i]);
		cout<<"<tr><th><a href=\"/posts/\""<<post_name<<".html\"><strong>"<<post_chinese_name<<"</strong></a></th>\n";
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
				cout<<"<a href=\"/archieve/"<<post_tag[i]<<"/\"><strong>";
				if(!TAG.count(post_tag[i])){cerr<<"ERROR tag not found\n";exit(0);}
				cout<<TAG[post_tag[i]]<<"</strong></a>";
				if(i!=tag_cnt) cout<<" ";
			}
			cout<<"</th>\n";
		}
	}
	cout<<"</table></center></div></div></div>\n";
}
