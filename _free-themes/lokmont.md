---
layout: theme
title: Lokmont
description:
image: lokmont.png
preview: https://lokmont-jekyll.netlify.com/
download: https://github.com/artemsheludko/lokmont/archive/master.zip
new:

date: 2018-08-01
browsers: Firefox, Safari, Opera, Chrome
version: Jekyll 3.6.x
includes: HTML Files, CSS Files, JS Files
theme-layout: Responsive
support: No.
---
Lokmont is a simple and completely responsive theme for Jekyll, suitable for any kind of bloggers and writers. It was created to be minimal, clean and at the same time functional.

### Features

* 100% responsive and clean theme
* Optimized for mobile devices
* Minimal design
* Valid HTML5 code
* Included site search
* Contact Page
* Post sharing
* Supports Mail Chimp Subscriber
* Supports Disqus Comments
* Social Media Profiles
* Formspree form
* Font Awesome fonts
* Google Fonts

* * *

#### Deployment

To run the theme locally, navigate to the theme directory and run `bundle install` to install the dependencies, then run `jekyll serve` or `bundle exec jekyll serve` to start the Jekyll server.

I would recommend checking the [Deployment Methods](https://jekyllrb.com/docs/deployment-methods/) page on Jekyll website.

* * *

#### Posts

To create a new post, you can create a new markdown file inside the _posts directory by following the [recommended file structure](https://jekyllrb.com/docs/posts/#creating-post-files).

```
  ---
  layout: post
  title: 10 Best books of all time
  date: 2017-10-27 18:09:50 +0300
  img: 17.jpg
  tags: [Books, Hobby]
  author: Natali_Braxton # Optional
  ---
```

You can set the tags, author and the post image.

Add post images to **/images/pages/** directory.

For tags, try to not add space between two words, for example, `Ruby on Rails`, could be something like (`ruby-on-rails`, `Ruby_on_Rails`, or `Ruby-on-Rails`).

* * *

#### Authors

You can add other authors for your posts. In the beginning, create the author in the file `_config.yml`

**For example:**

```
  # Other Authors - here you can add Other authors. For example Natali_Braxton
  authors:
    Natali_Braxton:
      author-name: Natali Braxton
      author-image: 111.jpg
      about-author: My name is Natali Braxton. I love walking, I play the guitar in my spare time. And also write articles about different technologies.
      author-email: natali.example@gmail.com
      author-twitter: https://twitter.com/
      author-facebook: https://twitter.com/
      author-instagram: https://www.instagram.com/
      author-pinterest: https://pinterest.com/
```

Then add the author in a post. Save and you are done.

```
  ---
  layout: post
  title: 10 Best books of all time
  date: 2017-10-27 18:09:50 +0300
  img: 17.jpg
  tags: [Books, Hobby]
  author: Natali_Braxton
  ---
```

* * *

#### Disqus

Lokmont Theme comes with Disqus comments enabled.

Open `_config.yml` file, and change the `mr-brown` value on line 52 with your [Disqus account shortname](https://help.disqus.com/customer/portal/articles/466208).

```sh
  # Comment Section (Disqus)
  disqus-identifier: mr-brown # Add your shortname for Disqus Comment. For example mr-brown
```

That’s all you need to setup Disqus from the theme side. If you get any issue regarding that comments are unable to load. First, make sure you have [registered your website with Disqus (Step 1)](https://help.disqus.com/customer/portal/articles/466182-publisher-quick-start-guide).

And also check [Disqus troubleshooting guide](https://help.disqus.com/customer/portal/articles/472007-i-m-receiving-the-message-%22we-were-unable-to-load-disqus-%22) if you still have issues.

* * *

#### Analytics

To integrate Google Analytics, open `_config.yml`, and add your Google Analytics identifier.
```sh
  # Google Analytics
  google-analytics: # Add your identifier. For example UA-99631805-1
```

* * *

#### Favicon

You can find the current favicon (favicon.ico) inside the theme root directory, just replace it with your new favicon.

* * *

#### License

MIT License