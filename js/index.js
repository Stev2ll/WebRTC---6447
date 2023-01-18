
navigator.mediaDevices.getUserMedia({audio: true, video:true}).then((stream) =>{

    let video = document.getElementById('video')
    
    video.srcObject = stream

    video.onloadedmetadata = (ev) => video.play()

    
navigator.mediaDevices.getDisplayMedia({audio: true, video:true}).then((scream) =>{

    let video2 = document.getElementById('video2')
    
    video2.srcObject = scream

    video2.onloadedmetadata = (ev) => video2.play()

    

}).catch((err) = console.log(err))

}).catch((err) = console.log(err))