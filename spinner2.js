const charArray = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
const stepDuration = 200;
for (let i = 0; i < charArray.length; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + charArray[i] + "    ");
  }, i * stepDuration);
}