# Display Styles

### block

### inline

### inline-block

<hr/>

1. How do the elements appear? Does the width have any effect? Why / Why not?

   > No effect, width remains same

2. Next, set display to inline. Does it cause any change? Why / Why not?

   > No effect, width remains same

3. Next, change display to block. What change does it cause?

   > Each span element takes up the entire line, with the width set to 40% of the viewport

4. Next, set display to inline-block. What change does it cause?

   > Each span gets 40% width, however none of the span elements take ups the entire width of the viewport, just 40% of it

5. In conclusion, summarize the differences you noticed in the 3 behavior of the 3 display
   types
   > block : Uses up the entire width viewport, and sets width to 40% of the entire width
   > <br/>
   > inline : Setting width doesnt affect, width still remains the same
   > <br/>
   > inline-block: Width gets set to 40%, however,entire widht viewport isnt occupied by the inline-block elements
