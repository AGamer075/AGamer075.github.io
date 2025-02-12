var noCount = 0;

document.addEventListener('DOMContentLoaded', (event) => {

    //Element Constants
    const yesDiv = document.getElementById("Yes")
    const noDiv = document.getElementById("No")
    const QueDiv = document.getElementById("Question")
    const mainHeadTxt = document.getElementById("mainHead")
    const indDiv = document.getElementById("independant")

    var isButtonDisabled = false;
    var isStop = false;

    //Gsap Functions
    function moveRight(){
        gsap.to(noDiv, {right:"0%", duration: 0.7, onComplete: function(){moveUp()}})
    }

    function moveUp() { 
        gsap.to(noDiv, {marginTop:"10%", duration: 0.7, onComplete: function(){moveLeft()}})
    }
    function moveLeft() {
        gsap.to(noDiv, {right:"55%", duration: 0.7, onComplete: function(){moveDown()}})
    }

    function moveDown() {
        gsap.to(noDiv, {marginTop:"80vh", duration: 0.7, onComplete: function(){
            if(isStop == false) {
                moveRight()
            }
            else {
                noDiv.style.marginTop = "1rem"
                noDiv.style.right = "auto"
                noDiv.style.position = "relative"
            }
        }})
    }

    //Typing Animation 

    function startTyping(text,speed) {
        let index = 0;
    
        function typeCharacter() {
          if (index < text.length) {
            mainHeadTxt.textContent += text[index];
            index++;
            setTimeout(typeCharacter, speed); // Adjust the speed by changing the timeout value
          } else {
            isButtonDisabled = false;
          }
        }
        typeCharacter();
        isButtonDisabled = true;
    }
      

    //Yes Button Pressed
    document.getElementById("Yes").addEventListener("click", function(){
        if(isButtonDisabled == true) {} else {
        yesDiv.style.visibility = "hidden"
        noDiv.style.visibility = "hidden"
        QueDiv.style.marginTop = "20%"
        if(noCount == 0){
            mainHeadTxt.textContent = ""
            startTyping("Yaayyyy she accepted immediately! love youuuuuu mwah! 💙",40)
            document.getElementById("AnimImage").src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHA2czhlZTI4YTl2djVzY3k3am4zNDgwbnhlb3N4aDhqYzRubXFvaiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/HxEdpHHGsbnWWv31Xt/giphy.webp"
        } else if(noCount == 4) {
            mainHeadTxt.textContent = "";
            document.getElementById("AnimImage").src = "https://i.giphy.com/QoylkR73VNqt63MIxj.webp"
            startTyping("Yayyyy, love yoouuuuuu. Took you long enough. Mwah! 💜",40)
        } else {
            mainHeadTxt.textContent = ""
            document.getElementById("AnimImage").src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnMyZnBpaTliamQwZzNrcHRyNWUxMDd4YnFtc2oxZmZjZHc0cWI3ayZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/fvN5KrNcKKUyX7hNIA/200.webp"
            startTyping("Yaayyyyy, I loveeee youuuuu. mwaah! 💝",40)
            indDiv.style.transform = 'scale(0)'
        }
        }
    });

    //No Button Pressed
    document.getElementById("No").addEventListener("click", function(){
        console.log("pressed")
      if (isButtonDisabled == true) {} else {  
      noCount +=1
      if(noCount == 1) {
        mainHeadTxt.textContent = "WHAT??"
        document.getElementById("AnimImage").src = "https://media3.giphy.com/media/WL9OQs5p9DaXKc3h3J/giphy.webp?cid=790b7611lp6s8ee28a9vv5scy7jn3480nxeosxh8jc4nmqoj&ep=v1_stickers_search&rid=giphy.webp&ct=s"
        startTyping(" Okay fine, I'm locking the button.",70)
        noDiv.style.backgroundColor = "#e0b1cc"
        noDiv.style.backgroundImage = "url(https://png.pngtree.com/png-clipart/20230120/ourmid/pngtree-cartoon-lock-png-image_6564340.png)"
        noDiv.disabled = true;

        setTimeout(function() {
            indDiv.classList.remove("hideClass")
            indDiv.classList.add("showClass")
        }, 2000);
      } else if(noCount == 2) {
            mainHeadTxt.textContent = ""
            document.getElementById("AnimImage").src = "https://media2.giphy.com/media/u7Q3bJnID2DJ6ydItj/giphy.webp?cid=790b7611lp6s8ee28a9vv5scy7jn3480nxeosxh8jc4nmqoj&ep=v1_stickers_search&rid=giphy.webp&ct=s"
            noDiv.classList.add("moveClass")
            startTyping("Ha, I moved the button while you weren't looking.",50)
      } else if(noCount == 3) {
            mainHeadTxt.textContent = ""
            noDiv.classList.remove("moveClass")
            noDiv.style.position = "Fixed"
            document.getElementById("AnimImage").src = "https://media1.giphy.com/media/uFsqCi7h6II9lpOV0s/giphy.webp?cid=790b7611lp6s8ee28a9vv5scy7jn3480nxeosxh8jc4nmqoj&ep=v1_stickers_search&rid=giphy.webp&ct=s"
            startTyping("Pretty Please?",40)

            moveRight()

      } else if(noCount == 4) {
            isStop = true
            mainHeadTxt.textContent = ""
            document.getElementById("noText").textContent = "Fine, Yes"
            startTyping("WILL YOU BE MY VALENTINE??",30)
            document.getElementById("AnimImage").src = "https://media4.giphy.com/media/fFw3CcsU8jcqlVMOiv/giphy.webp?cid=790b7611lp6s8ee28a9vv5scy7jn3480nxeosxh8jc4nmqoj&ep=v1_stickers_search&rid=giphy.webp&ct=s"
      } else if(noCount == 5) {
            mainHeadTxt.textContent = ""
            yesDiv.style.visibility = "hidden"
            noDiv.style.visibility = "hidden"
            QueDiv.style.marginTop = "20%"
            startTyping("Still the wrong yes BUT YAYYYYYYYYYYYY!!!! OKAY LOVE YOUUUU 💛",30) 
            document.getElementById("AnimImage").src = "https://media1.giphy.com/media/QoylkR73VNqt63MIxj/giphy.webp?cid=790b7611lp6s8ee28a9vv5scy7jn3480nxeosxh8jc4nmqoj&ep=v1_stickers_search&rid=giphy.webp&ct=s"
      } else {
        mainHeadTxt.textContent = "Something has gone wrong, please refresh the page."
      }
      }  
    });

    //Key Pressed 
    document.getElementById("clearbutton").addEventListener("click", function(){
        console.log("Print")
        indDiv.classList.add("sitionClass")
        indDiv.style.transform = 'rotate(250deg)'
        setTimeout(function() {
            noDiv.style.backgroundImage = "none"
            noDiv.disabled = false;
            indDiv.style.transform = 'scale(0)'
            noDiv.style.backgroundColor = "#ffcce9"
        },1000);
    })

  });

