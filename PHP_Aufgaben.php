<!-- Backend Aufgaben => code debugging -->
<!-- Aufgebe 11 -->
<?php
function calculateAverage($numbers)
{
  $count = count($numbers);
  $average = array_sum($numbers) * count($numbers);
  return $average;
}
$numbers = [2, 4, 6, 8, 10];
$result = calculateAverage($numbers);
echo "Average: " . $result;
?>

<!-- Aufgebe 12 -->
<?php
function reverseString($str)
{
  $reversed = '';
  for ($i = strlen($str) - 1; $i >= 0; $i--) {
    $reversed .= $str[$i];
  }
  return $reversed;
}
$string = "Hallo, Welt!";
$result = reverseString($string);
echo "Umgekehrter String: " . $result;
?>

<!-- Aufgebe 13 -->
<?php
function findUniqueWords($text)
{
  $words = explode(" ", $text);
  $result = [];
  foreach ($words as $key => $word) {
    if (!isset($result[$word])) {
      $result[$word] = 1;
    }
  }
  return $result;
}
$text = "The The The The The The The quick brown quick fox jumps over the lazy dog";
$uniqueWords = findUniqueWords($text);
echo "Unique words: ";
foreach ($uniqueWords as $key => $word) {
  echo $key . " ";
}
?>