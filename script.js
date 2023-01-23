//CallBack Hell Task Day-1

//Displaying countdown fron 10 to 1 on the screen and then display "Happy Independance Day" n the screen
//Constrains:
//1.Do not use named functions
//2.Do not use a set interval function
//3.Do not userecursion
//4.Do not use IIFS and named function
//5.Do not use looping
//6.use callback hell to display the timer 


setTimeout(()=>{
  document.querySelector("h1").innerText=10;
  document.body.style.color="red";
  setTimeout(()=>{
    document.querySelector("h1").innerText=9;
      setTimeout(()=>{
        document.querySelector("h1").innerText=8;
          setTimeout(()=>{
            document.querySelector("h1").innerText=7;
               setTimeout(()=>{
                document.querySelector("h1").innerText=6;
                    setTimeout(()=>{
                      document.querySelector("h1").innerText=5;
                         setTimeout(()=>{
                          document.querySelector("h1").innerText=4;
                              setTimeout(()=>{
                                document.querySelector("h1").innerText=3;
                                   setTimeout(()=>{
                                    document.querySelector("h1").innerText=2;
                                    setTimeout(()=>{
                                      document.querySelector("h1").innerText=1;
                                       setTimeout(()=>{
                                           document.querySelector("h1").innerText="Happy Independance Day";
                                           },1000)
                                       },1000)
                                  },1000)
                             },1000)
                        },1000)
                   },1000)
          },1000)
      },1000)
  },1000)
},1000)
},1000)