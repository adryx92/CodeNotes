# Less
# Resources
* Instructions, some examples and brief comparison with SASS: [CSS Preprocessors - Sass vs LESS](https://www.keycdn.com/blog/sass-vs-less)
* Features list from official doc: http://lesscss.org/features/
* Some other examples: [10 LESS CSS Examples You Should Steal for Your Projects](https://mayvendev.com/blog/10-less-css-examples-you-should-steal-for-your-projects)
* If conditions and loops [Understanding Less Guards and Loops](https://www.sitepoint.com/understanding-less-guards-loops/)

## Compile and minify code
You can compile and minify code thanks to the [less-plugin-clean-css](https://github.com/less/less-plugin-clean-css) plugin using [clean-css](https://github.com/jakubpawlowicz/clean-css).

First you have to install it trough npm: 
<code>npm install less-plugin-clean-css -g</code>.

Then run <code>lessc -clean-css style.less style.min.css</code>.
