---
layout: post
title:  "MATLAB: Generating Stunning 3D Surface Plots"
date: 2026-03-15 12:00:00 +0530
categories: MATLAB
---

MATLAB excels at data visualization, especially when dealing with multidimensional matrices. One of the visually most striking ways to represent a function `z = f(x, y)` is through a 3D surface plot.

Below is a snippet demonstrating how to generate a classic *sinc* function surface, commonly modeled as `sin(r)/r`, which creates a pattern resembling a drop of water creating ripples in a pond.

We use `meshgrid` to generate x and y domains, compute the function, and then use `surf` along with some styling commands to make it look professional.

{% highlight matlab %}
% Define the spatial domain for x and y
[X, Y] = meshgrid(-8:0.2:8, -8:0.2:8);

% Calculate corresponding radius R from center (0,0)
R = sqrt(X.^2 + Y.^2) + eps;

% Compute the sinc function
% Added eps to R to avoid division by zero at the origin
Z = sin(R) ./ R;

% Create a new figure window with a clean white background
figure('Color', 'white');

% Plot the 3D surface
surf(X, Y, Z);

% Make it look pretty:
% Remove the grid lines on the surface itself
shading interp;  

% Add a colormap that provides good contrast
colormap(jet);   

% Add a colorbar to relate colors to Z values
colorbar;        

% Adjust lighting to give it depth
camlight left;
lighting phong;

% Add descriptive labels
title('3D Surface Plot of completely unnormalized sinc function');
xlabel('X-axis');
ylabel('Y-axis');
zlabel('Amplitude');

% Optimize the viewing angle
view(45, 30);
{% endhighlight %}

### Key Functions Explained:
* `meshgrid`: Generates a grid of X and Y coordinate pairs spanning the specified axes, necessary for computing Z natively through matrix operations.
* `eps`: Floating-point relative accuracy. Adding this small number (`2.22e-16`) prevents a `divide by zero` error when evaluating at the origin `(0,0)`, without noticeably shifting the resulting plot data.
* `shading interp`: Interpolates colors across the faces of the polygons that make up the plot for a smooth finish, rather than displaying blocks of color (`faceted` by default).
* `camlight` & `lighting phong`: Simulates an external light source to give shadows and a sense of curvature to peaks and valleys.

Try substituting your own data or complex math function bounds to see how `surf` handles it!
