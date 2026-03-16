---
layout: post
title: "Python Decorators: A Simple Example"
date: 2026-03-16 10:00:00 +0530
categories: Python
---

Decorators in Python provide a very elegant way to modify the behavior of a function or class. They allow us to wrap another function in order to extend the behavior of the wrapped function, without permanently modifying it.

Here is a simple example of a decorator that measures the execution time of a function:

{% highlight python %}
import time

def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function {func.__name__} took {end_time - start_time:.4f} seconds to execute.")
        return result
    return wrapper

@timer_decorator
def example_function(n):
    total = 0
    for i in range(n):
        total += i
    return total

# Calling the decorated function
result = example_function(1000000)
print(f"Result: {result}")
{% endhighlight %}

When you run this code, the `@timer_decorator` automatically wraps `example_function`, modifying its behavior to output the execution time.
