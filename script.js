//your JS code here. If required.
function removeSelectedColor() {
            var select = document.getElementById("colorSelect");
            var selectedOption = select.options[select.selectedIndex];
            
            if (selectedOption) {
                select.removeChild(selectedOption);
            }
        }
