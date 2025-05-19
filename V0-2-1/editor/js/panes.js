const stepsPane = document.querySelector(".steps-pane");

function setupPanes(hasLesson) {
    if(hasLesson) {
        Split(['.steps-pane', '.code-pane', '.output-pane'], {
            sizes: [20, 50, 30],
        });
    }else{
        Split(['.code-pane', '.output-pane'], {
            sizes: [60,40],
        });
        stepsPane.remove();
    }

    Split(['.canvas-output-pane', '.console-output-pane'], {
        sizes: [70, 30],
        direction: 'vertical',
        minSize: 30,
        snapOffset: 10,
    });

    const horzGutters = document.querySelectorAll(".gutter.gutter-horizontal")

    for (let gutter of horzGutters) {
        let block = document.createElement("div");
        block.classList.add("gutter-block");
        gutter.appendChild(block);
    }
    const vertGutters = document.querySelectorAll(".gutter.gutter-vertical")

    for (let gutter of vertGutters) {
        let block = document.createElement("div");
        block.classList.add("gutter-block");
        gutter.appendChild(block);
    }
}

//hide nav by default
document.querySelector(".navbar-visibility-button").click()