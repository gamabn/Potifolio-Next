"use client"
import React from "react";
import {Typewriter} from "nextjs-simple-typewriter";

function Type() {
  return (
 //   <Typewriter
 //     options={{
 //       strings: [
 //         "Desenvolvedor de software",
 //         "Freelancer",
 //       ],
 //       autoStart: true,
 //       loop: true,
 //       deleteSpeed: 50,
 //     }}
 //   />
 <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
       <span style={{ color: 'red', fontWeight: 'bold' }}>
 <Typewriter
 words={['Desenvolvedor de software', 'Freelancher', 'HTM CSS JAVASCRIPT REACT REACT-NATIVE NEXT', 'Repeat!']}
 loop={0}
 cursor
 cursorStyle='_'
 typeSpeed={80}
 deleteSpeed={50}
 delaySpeed={2000}
 //autoStart={true}
 //onType={handleType}
/>
</span>
</h1>
  );
}

export default Type;