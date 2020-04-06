import requests 
from bs4 import BeautifulSoup
import urllib3
import codecs
import sys


urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0'}

page = requests.get('https://tureng.com/en/turkish-english/%s' % sys.argv[1], headers=headers, timeout=(20,20), verify=False)

soup = BeautifulSoup(page.text,'html.parser')
list = soup.find_all("div", class_="tureng-voice") 


for i in list:
    for child in i.findChildren("audio", recursive=True):
        for subchild in child.findChildren("source", recursive=False):
            print(subchild)


