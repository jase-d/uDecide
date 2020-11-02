
export const numberSequence = (second = 0) => {
  var count = 0;
  const go = () => {
    console.log(count)
    count++;
      this.setState({
        number: Math.floor(Math.random() * (10000 - 1111) + 1111)
      });
    if (count >= 100) {
      return;
    } else {
      window.requestAnimationFrame(go);
    }
  };
  return go()
  };