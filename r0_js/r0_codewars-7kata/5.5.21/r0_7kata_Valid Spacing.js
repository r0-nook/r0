function validSpacing(s) {
	// трим говорит строка s без пробелов на концах и строка s равны?
  return s.trim() == s && !s.includes("  ");
  // инклудес говорит о содержании двух пробелов подряд в строке s
  // оператор ! говорит НЕ
}