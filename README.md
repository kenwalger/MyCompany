[Treehouse](https://www.teamtreehouse.com "Treehouse") Mentor Project
===

Ken W. Alger
---

Approach
====

1. Create project structure.

 > Setup site directory structure, basic SCSS directory structure and indexes.

2. Evaluate color palette from provided image(s).

 | Usage | Hex Value | Color Name |
 | --- | :---: | --- |
 | Company Name | #ffd18f | Grandis |
 | Active Page Button | #33c3f0 | Picton Blue |
 | Inactive Page Button | #7f7f7f | Button Gray |
 | Brown Button | #d78f61 | Copperfield |
 | Link Logos | #828282 | Gray |
 | Link Text Color | #1eaeb8 | Eastern Blue|
 | Footer Text | #c7c7c7 | Silver |

3. Automate build environment with [Gulp](http://gulpjs.com/ "Gulp").

 > Automate tasks such as Sass compiling, build system.

4. HTML content

 > Divs and basic layout and verbiage. Used [Bacon Ipsum](https://baconipsum.com/ "Bacon Ipsum") to generate ipsum text.

5. CSS layout with SCSS

 > Generate the general layout, grid system, nav, header, and footer.

6. Modal operation

 > I opted for a minimalist approach for the modal window, which could be done in a heavy JavaScript fashion or, had I
chosen to use a front-end framework such as [Bootstrap](http://www.http://getbootstrap.com/ "Twitter Bootstrap") or
[Foundation](http://www.http://foundation.zurb.com/ "Zurb Foundation") they have modal options as well. My implementation
of the modal window is accomplished with some CSS for the modal formatting and JavaScript's 
[**HTMLElement.style**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style "HTMLElement.style") property
to change _visibility_ and _opacity_ of the modal window. Sometimes a minimal approach is best.

7. Adjustments to meet design spec.

 > Pixel fun!!!

8. Validate for CSS and HTML

 > Use the [W3C Markup Validation Service](https://validator.w3.org "HTML & CSS Validation") to check for errors.


---
www.w3.org validation
+ CSS Validated on 9 Nov 2015 for CSS level 3
+ HTML Validated on 9 Nov 2015

---

Live Site
===
[http:www.kenwalger.com/MyCompany](http://www.kenwalger.com/MyCompany "MyCompany site")

---

To-dos
===

As with all projects, they never really seem to be "complete". Given the opportunity to add additional functionality or
improve the site some of the items I would do would be:

+ better grid system, manually created the grid. Could do it with mix-ins and functions.
+ modal improvement - it's functional but on small screens I would implement a smaller window with an internal "more..."
link
+ improve the favicon, it's functional but I wish I had better design skills.
