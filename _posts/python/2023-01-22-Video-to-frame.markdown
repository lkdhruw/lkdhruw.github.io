---
layout: post
title:  "Video to frame"
date:   2023-01-22 19:06:15 +0530
categories: Python
---
Extract and save the frames from a video file to local directory.

{% highlight python %}
import os
import cv2


def playback():
    i = 0
    print("Playback started")
    print(video_file)
    while True:
        _, frame = video_file.read()
        dn = os.path.join('output', filename)
        if not os.path.exists(dn):
            os.makedirs(dn)
        fnw = filename + "_" + str(i) + ".jpg"
        i = i + 1
        if frame is None:
            print("Couldn't get the frame at " + str(i))
            break
        else:
            try:
                cv2.imwrite(dn + '/' + fnw, frame)
            finally:
                pass


files = ["VID_1.mp4",
        "VID_2.mp4",
        "VID_3.mp4"]

loc = r"C:\..."

for f in files:
    file_location = os.path.join(loc, f)
    filename = file_location.split('\\')[-1]
    print(filename)
    filename = filename.split(".")[0]
    print(file_location)
    video_file = cv2.VideoCapture(file_location)
    if video_file is None:
        exit()
    playback()

{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
