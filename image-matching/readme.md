#Image Matching (48Hours)
Images are stored in the form of a grid. Image recognition is possible by comparing grids of two images and checking if they have any ```matching regions```.

You are given two grids where each cell of the grids contains either a ```0``` or a ```1```. If two cells share a side then they are adjacent. Cells that contain ```1``` form a connected region if any cell of that region can be reached by moving through the adjacent cells that contain 1. 
Overlay the first grid onto the second and if a region of the first grid completely matches a region of the second grid, the regions are matched. Count total number of such matched regions in the second grid.


For example, given two 3x3 grids <em>1</em>&nbsp;and <em>2</em>

111 111 →<span style="color:#2ecc71;"> 111 111</span>

100 100 →<span style="color:#2ecc71;"> 1</span>00 <span style="color:#2ecc71;">1</span>00

<p>100 101 →<span style="color:#2ecc71;"> 1</span>00 <span style="color:#2ecc71;">1</span>0<span style="color:red;">1</span></p>


<p>There are <em>2</em>&nbsp;regions in the second grid: { (0,0),(0,1),(0,2),(1,0),(2,0) } and { (2,2) }.</p>

<p>Regions in grid 1 cover the first region of grid 2, but not the second region. There is <em>1</em>&nbsp;matching region.</p>



<p>Making a slight alteration to the above example:</p>

<p>111 111</p>

<p>101 100</p>

<p>100 101</p>

<p>There are no matching regions. From the first graph, the <em>1</em>&nbsp;at position <em>(1,2) </em>is not matched in the second grid's larger region. The second grid position <em>(2,2) </em>is not matched in grid <em>1.</em></p>

<p>&nbsp;</p>

<p><strong>Function Description </strong></p>

<p>Complete the function <em>countMatches</em> in the editor below. The function must return the number of matching regions.</p>

<p>&nbsp;</p>

<p>countMatches has the following parameter(s):</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;<em>grid1[grid1[0],...grid1[n-1]]:</em>&nbsp; an array of bit strings representing the rows of image 1</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;<em>grid2[grid2[0],...grid2[n-1]]:</em>&nbsp; an array of bit strings representing the rows of image 2</p>
<!--
<p class="section-title">Function Description</p>

<p>Complete the function <em>countMatches</em> in the editor below. It has the following parameter(s):</p>

<table class="function-params">
	<tbody>
		<tr>
			<td class="headers">Parameters</td>
			<td class="params-table-cell">
			<table class="params-table">
				<tbody>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th class="description">Description</th>
					</tr>
					<tr>
						<td class="code">grid1</td>
						<td class="code">String Array</td>
						<td class="left">Grid Data of First Image</td>
					</tr>
					<tr>
						<td class="code">grid2</td>
						<td class="code">String Array</td>
						<td class="left">Grid Data of Second Image</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
		<tr>
			<td class="headers">Return</td>
			<td class="left">The function must return an integer denoting the number of matched regions.</td>
		</tr>
	</tbody>
</table>
-->

<p class="section-title">&nbsp;</p>

<p class="section-title">Constraints</p>

<ul>
	<li><em>1 ≤ n&nbsp;≤ 100</em></li>
	<li><em>1 ≤ |grid1[i]|, |grid2[i]|&nbsp;≤ 100</em></li>
	<li><em>grid cells contain only 0 or 1&nbsp;</em></li>
</ul>
<!--       <StartOfInputFormat> DO NOT REMOVE THIS LINE-->

<details title="Click bar to open/close the example." open=""><summary class="section-title">Input Format For Custom Testing</summary>

<div class="collapsable-details">
<p>Input from stdin will be processed as follows and passed to the function.</p>

<p>&nbsp;</p>

<p>The first line contains an integer <em>n</em>, the size of the <em>grid1</em> array.</p>

<p>The next <em>n</em> lines each contain an element <em>grid1[i]</em> where 0 ≤ i &lt; n.</p>

<p>The next line contains an integer <em>n</em>, the size of the <em>grid2</em> array.</p>

<p>The next <em>n</em> lines each contain an element <em>grid2[i]</em> where 0 ≤ i &lt; n.</p>
<!--
<p>Locked stub code in the editor reads the following input from stdin and passes it to the function:</p>

<p>The first line contains an integer, <em>n</em>, denoting the size of <em>grid1</em> array</p>

<p>Each line <em>i</em> of the <em>n</em> subsequent lines (where <em>0 &le; i &lt; n</em>) contains a string of length <em>m</em> describing <em>grid1<sub>i</sub></em></p>

<p>The next line contains an integer, <em>n</em>, denoting the size of <em>grid2</em> array</p>

<p>Each line <em>i</em> of the <em>n</em> subsequent lines (where<em>0 &le; i &lt; n</em>) contains a string of length <em>m</em> describing <em>grid2<sub>i</sub></em></p>
-->
</div>
</details>
<!--        </StartOfInputFormat> DO NOT REMOVE THIS LINE-->

<details open=""><summary class="section-title">Sample Case 0</summary>

<div class="collapsable-details">
<p class="section-title">Sample Input 0</p>

<pre>3
001
011
100
3
001
011
101</pre>

<p class="section-title">Sample Output 0</p>

<pre>1</pre>

<p class="section-title">Explanation 0</p>

<p>The first grid forms 2 regions. They are { (0,2), (1,1), (1,2) } and { (2,0) }</p>

<p>The second grid forms 2 regions. They are { (0,2), (1,1) , (1,2), (2,2)} and { (2,0) }</p>

<p>So, only one region matches.</p>
</div>
</details>

<details title="Click bar to open/close the example."><summary class="section-title">Sample Case 1</summary>

<div class="collapsable-details">
<p class="section-title">Sample Input 1</p>

<pre>4
0100
1001
0011
0011
4
0101
1001
0011
0011</pre>

<p class="section-title">Sample Output 1</p>

<pre>2</pre>

<p class="section-title">Explanation 1</p>

<p>The first grid forms 3 regions. They are { (0,1) }, { (1,0) } and { (1,3), (2,2), (2,3), (3,2), (3,3) }</p>

<p>The second grid forms 3 regions. They are { (0,1) } , { (1,0) } and { (0,3), (1,3), (2,2), (2,3), (3,2), (3,3) }</p>

<p>So, two regions match.</p>
</div>
</details>

<details title="Click bar to open/close the example."><summary class="section-title">Sample Case 2</summary>

<div class="collapsable-details">
<p class="section-title">Sample Input 2</p>

<pre>4
0010
0111
0100
1111
4
0010
0111
0110
1111</pre>

<p class="section-title">Sample Output 2</p>

<pre>0</pre>

<p class="section-title">Explanation 2</p>

<p>The first grid forms 1 region. It is { (0,2) , (1,1), (1,2), (1,3) , (2,1), (3,0), (3,1), (3,2), (3,3) }</p>

<p>The second grid forms 1 region. It is { (0,2) , (1,1), (1,2), (1,3) , (2,1), (2,2), (3,0), (3,1), (3,2), (3,3) }</p>

<p>So, no regions match.</p>
</div>
</details>
</div>
</div>