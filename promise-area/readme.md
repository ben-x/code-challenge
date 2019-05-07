#Promise Area (24Hours) 
<br>
<p>In this challenge, use <em>Javascript Promises</em> to calculate the areas of various geometrical shapes. The shapes are square, rectangle, circle and triangle, and the area of each can be computed using these formulae:</p>

<ul>
	<li>Square of side '<em>a</em>': Area = <em>a<sup>2</sup></em>&nbsp;</li>
	<li>Rectangle of length '<em>l</em>' and width '<em>w</em>': Area = <em>w x l</em>
</li>
	<li>Circle of radius '<em>r</em>': Area =<em> Pi x r<sup>2</sup></em>&nbsp;</li>
	<li>Triangle of base '<em>b</em>' and height '<em>h</em>': Area = <em>0.5 x b x h&nbsp;</em>
</li>
</ul>

<p><em>Note</em>: Make sure to use the value of <em>Pi</em> as <em>3.14</em> and round off the areas of all shapes to 2 decimal places.</p>

<p>&nbsp;</p>

<p><strong>Function Descriptions</strong></p>

<p>&nbsp;</p>

<p>Complete the function <code>getAreas</code> &nbsp;that takes an array of shapes and their respective sides and returns a promise that represents an array of areas of all of the shapes. Also, complete the helper function <code>calculateArea</code> that takes a single shape and its side/sides and also returns a promise that represents its area.</p>

<p>&nbsp;</p>

<p>The specifications of the promise returned by <code>getAreas</code> are as follows:</p>

<ul>
	<li>This Promise consolidates outputs of all promises returned by <code>calculateArea</code> for shapes.</li>
</ul>

<p>&nbsp;</p>

<p>The specifications of the promise returned by <code>calculateArea</code> are as follows:</p>

<ul>
	<li>If the shape&nbsp;passed to the Promise is valid, resolve it with the calculated area of the respective shape.</li>
	<li>If the shape passed to the Promise is invalid, reject everything with <em>[-1]</em>.</li>
</ul>

<p>&nbsp;</p>

<p><strong>Constraints</strong></p>

<ul>
	<li>&nbsp;<em>1</em> ≤ number of shapes&nbsp;&nbsp;≤ <em>2000</em>
</li>
	<li>&nbsp;<em>1</em>&nbsp;&nbsp;≤ length of sides for all shapes&nbsp;&nbsp;≤ <em>10<sup>6</sup></em>
</li>
</ul>

<p>&nbsp;</p>
<!-- <StartOfInputFormat> DO NOT REMOVE THIS LINE-->

<details><summary class="section-title">Input Format For Custom Testing</summary>

<div class="collapsable-details">
<p>The first line contains an integer, <em>n</em>, that denotes the number of shapes and their values.<br>
Each line <em>i</em> of the <em>n</em> subsequent lines contains a String that describes <em>shapes[i]</em>. Each line <em>j</em> of the <em>n</em> subsequent lines contains an Integer Array describing the <em>values[j]</em> of their respective shapes.</p>
</div>
</details>
<!-- </StartOfInputFormat> DO NOT REMOVE THIS LINE-->

<details open="open"><summary class="section-title">Sample Case 0</summary>

<div class="collapsable-details">
<p class="section-title">Sample Input For Custom Testing</p>

<pre>2
square
rectangle
circle
triangle
2
3,4
5 
2,4</pre>

<p class="section-title">Sample Output</p>

<pre>4
12 
78.5 
4
</pre>

<p class="section-title">Explanation</p>

<p>In the mentioned sample case, the square has a side of <em>2</em> units, the rectangle has its sides as<em> 3 </em>units and <em>4</em> units, the circle has a radius of <em>5</em> units and the triangle has a base of <em>2</em> units and height of <em>4 </em>units. Thus,</p>

<ul>
	<li>The area of the square = <em>2 x 2 = 4 units</em>
</li>
	<li>The area of the rectangle = <em>3 x 4 = 12 units</em>.</li>
	<li>The area of the circle = <em>3.14 x 5 x 5 = 78.5 units. </em>
</li>
	<li>The area of the&nbsp;triangle = <em>0.5 x 2 x 4 = 4 units. </em>
</li>
</ul>
</div>
</details>

<details><summary class="section-title">Sample Case 1</summary>

<div class="collapsable-details">
<p class="section-title">Sample Input For Custom Testing</p>

<pre>3
square
trapezium
rectangle
2
3,3,4
1,3
</pre>

<p class="section-title">Sample Output</p>

<pre>-1
</pre>

<p class="section-title">Explanation</p>

<p>In the above example, the input consists of the shape trapezium which is not a shape we require. Thus, the promise rejects everything and returns <em>[-1].</em></p>
</div>

<details><summary class="section-title">Sample Case 2</summary>

<div class="collapsable-details">
<p class="section-title">Sample Input For Custom Testing</p>

<pre>3
square
trapezium
rectangle
2
3,3,4
1,3
</pre>

<p class="section-title">Sample Output</p>

<pre>-1
</pre>

<p class="section-title">Explanation</p>

<p>In the above example, the input consists of the shape trapezium which is not a shape we require. Thus, the promise rejects everything and returns <em>[-1].</em></p>
</div>
</details>
</details>  