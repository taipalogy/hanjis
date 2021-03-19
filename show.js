const cli = new taipa.Client();


function showHanjis(str) {
  const seqs = cli.processTonal(str).soundSequences
  const initialLetter = seqs[0][0].toString()
  const names = Object.getOwnPropertyNames(obj[initialLetter])
  
  if(names.includes(str)) {
    for(const prop in obj) {
      if(prop === initialLetter) {
        const value = obj[prop][str]
        document.write("<span style='font-family:georgia;font-size:36px'>" + value + "</span>")
      }
    }
  }        
}


function showWord(str) {
  const seqs = cli.processTonal(str).soundSequences;
  const letters = seqs[0].map(it => it.toString());
  const sounds = seqs[0].map(it => it.name);

  let text = '';
  for (let i = 0; i < sounds.length; i++) {
    if (
      sounds[i] === taipa.TonalSoundTags.freeTone ||
      sounds[i] === taipa.TonalSoundTags.checkedTone
    ) {
      text =
        text +
        "<span style='font-family:georgia;font-size:36px;font-style:italic;color:red'>" +
        letters[i] +
        '</span>';
    } else {
      text =
        text +
        "<span style='font-family:georgia;font-size:36px'>" +
        letters[i] +
        '</span>';
    }
  }
  document.write(text);
}
