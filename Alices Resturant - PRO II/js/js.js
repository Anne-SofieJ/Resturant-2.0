var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#5bb464', '#eff291'],
                ['#8eeded', '#e3e841'],
                ['#e1eec3', '#41e86b'],
            ]
        }
    }
})