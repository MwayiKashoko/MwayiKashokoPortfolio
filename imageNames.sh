list=`ls Images`

for i in $list; do
	if echo $i | grep -q ".png"; then
		a=``
		echo "<span class=\"languageImageSpans\">
	<img class=\"langImages\" src=\"Images/$i\"/>
</span>

"
	fi
done