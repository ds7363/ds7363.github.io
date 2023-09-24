// Define selector for selecting
// anchor links with the hash
let anchorSelector = 'a[href^="#"]';

// Collect all such anchor links
let anchorList =
    document.querySelectorAll(anchorSelector);
    
// Iterate through each of the links
anchorList.forEach(link => {
    link.onclick = function (e) {

        // Prevent scrolling if the
        // hash value is blank
        e.preventDefault();
    
        // Get the destination to scroll to
        // using the hash property
        let destination =
            document.querySelector(this.hash);
    
        // Scroll to the destination using
        // scrollIntoView method
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});

var item = document.getElementById("Aboutpicture1");
item.addEventListener("mouseover", func1, false);

function func1()
{  
   var item = document.getElementById("abouttext1");
   item.setAttribute("style", "visibility:visible")
}

var item = document.getElementById("Aboutpicture2");
item.addEventListener("mouseover", func2, false);

function func2()
{  
   var item = document.getElementById("abouttext2");
   item.setAttribute("style", "visibility:visible")
}

var item = document.getElementById("Aboutpicture3");
item.addEventListener("mouseover", func3, false);

function func3()
{  
   var item = document.getElementById("abouttext3");
   item.setAttribute("style", "visibility:visible")
}

var item = document.getElementById("Aboutpicture4");
item.addEventListener("mouseover", func4, false);

function func4()
{  
   var item = document.getElementById("abouttext4");
   item.setAttribute("style", "visibility:visible")
}
