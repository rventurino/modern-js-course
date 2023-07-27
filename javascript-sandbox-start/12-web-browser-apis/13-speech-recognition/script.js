const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US'
rec.continuous = true;

rec.onresult = function (e) {
    const acceptedColors = [
      'red',
      'blue',
      'green',
      'yellow',
      'pink',
      'brown',
      'purple',
      'orange',
      'black',
      'white', 
    ];
  
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const script = e.results[i][0].transcript.toLowerCase().trim();
  
      if (acceptedColors.includes(script)) {
        console.log(script);
        document.body.style.backgroundImage = '';
        document.body.style.backgroundColor = script;
      } else if(script == "cut my life into pieces"){
        console.log(script);
        let newBackgroundImage = "url('cutmylifeintopieces.jpg')";
        document.body.style.backgroundImage = newBackgroundImage;
      } else {
        alert(`You said "${script}", please say a color.`);
      }
    }
  };

rec.start();

