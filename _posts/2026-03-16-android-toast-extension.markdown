---
layout: post
title: "Android: Simple Toast Message Extention"
date: 2026-03-16 10:30:00 +0530
categories: Android
---

When developing in Android using Kotlin, extension functions can make your code much cleaner. A common pattern is showing a Toast message, which usually requires passing the context and duration.

Here is a simple Kotlin extension for `Context` that makes showing Toasts incredibly easy:

{% highlight kotlin %}
import android.content.Context
import android.widget.Toast

// Extension function for showing a short Toast message
fun Context.showToast(message: String, duration: Int = Toast.LENGTH_SHORT) {
    Toast.makeText(this, message, duration).show()
}
{% endhighlight %}

Once you define this extension function in your project, you can easily use it in any Activity or Fragment by just calling:

{% highlight kotlin %}
// Inside an Activity
showToast("Hello from Kotlin Extension!")

// Or specifying the duration
showToast("Long message alert", Toast.LENGTH_LONG)
{% endhighlight %}

This helps keep your UI code clean and prevents you from repeating the `Toast.makeText` boilerplate code over and over again.
