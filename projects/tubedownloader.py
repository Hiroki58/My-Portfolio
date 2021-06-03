# coding:utf-8
from pytube import YouTube

link = input('Enter the link: ')
yt = YouTube(link)

print('Title: ',yt.title)

print('Number of views: ',yt.views)

print('Length of video: ',yt.length,'seconds')

print('Description: ',yt.description)

print('Ratings: ',yt.rating)

