

      
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            swal({
                title: "Calm Down !!!",
                    text: "KeyBoard shurtcut and right clicks are disabled in the site",
                    icon: "warning"
              });
          });
        
          document.addEventListener('keydown', function(event) {
            if (event.key === 'F12') {
              event.preventDefault();
            }
            // if (event.ctrlKey && event.shiftKey && event.key === 'i' && event.key === 'j' && event.ctrlKey && event.key === 'u' && event.key === 'S' && event.key === 'h' && event.key === 'r' &&
            //                        event.key === 'a' && event.key === 'e' && event.key === 'c' && event.key === 'v' &&
            //                        event.key === 'x' && event.key === 'p') {
            //   event.preventDefault();
            // }
            if (event.ctrlKey && event.shiftKey && event.key === 'C') {
              event.preventDefault();
              swal({
                title: "Calm Down !!!",
                    text: "KeyBoard shurtcut and right clicks are disabled in the site",
                    icon: "warning"
              });
            }
            if (event.ctrlKey && event.key === 'u' || event.ctrlKey && event.key === 's' || event.ctrlKey && event.key === 'S' || event.ctrlKey && event.key === 'U') {
                event.preventDefault();
                swal({
                    title: "Calm Down !!!",
                    text: "KeyBoard shurtcut and right clicks are disabled in the site",
                    icon: "warning"
                  });
              }
          });
          