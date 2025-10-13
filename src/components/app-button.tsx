// { label }: { label: string } -> props
// ilk render sırasında component'e geçilen argumanalara props denir

// { label } -> birden fazla  argüman dışarıdan geçilebilir. Bu sebeple {} object formatından yararlanırız.
function AppButton({
	label,
	_color,
	onButtonClick,
}: {
	label: string;
	_color?: string;
	onButtonClick: () => void;
}) {
	return <button style={{color:_color || 'black'}} onClick={onButtonClick}>{label}</button>;
}

// ? optional değer
// _color || 'black' -> _color değeri geçilmezse boş bırakılırsa default olarak black atanır 

// Button onClick özelliği ekledik.
// Bu dosyadan tek bir bileşen ihraç ediliyor
// Bu, diğer dosyalarda bu bileşeni kullanmak için gereklidir
export default AppButton;

// Senaryo-1 -> Componente dışarıdan label ise isim verme
// Senaryo-2 -> Componente dışarıdan label değil de onClick fonksiyonu geçme
// Senaryo 3 -> Componente dışarıdan color değeri opsiyonel olarak geçme
