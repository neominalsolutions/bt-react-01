import React, { useState } from 'react';

// api daki veri endpointimiz
// const promise = new Promise((resolve) => {
// 	setTimeout(() => {
// 		return resolve('data'); // dönecek veri
// 	}, 10000);
// }); // 10sn sonra veri döndüren bir endpoint tanımı yaptık.

// API dan gelen verileri ekranda gösterirken kullanacağımız bir tip
export interface User {
	id: number; // js bigint, int,short,double,decimal
	username: string;
}

function UsersPage() {
	const [data, setData] = useState<User[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<undefined | null>(null);
	// const a;
	// console.log('a', a);

	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' })
			.then((response) => {
				console.log('response', response);
				// https://jsonplaceholder.typicode.com/usersx url bu şekilde verince bu durum meydana gelir.
				// 404 sunucundan rejected dönmediğinde bu özel durumu biz yakalayıp kodu reject ettik ki error state düzgün çalışsın
				if (response.status === 404) {
					return Promise.reject({ message: 'sayfa bulunamadı' });
				}
				return response.json(); // response json formatına döndür
			})
			.then((data) => {
				setData(data); // başarı anı
				console.log('data', data);
			})
			.catch((err) => {
				setError(err); // hata anı
				console.log('err', err);
			})
			.finally(() => {
				setLoading(false); // veri yükleme bitme anı
				console.log('işlem bitti'); // then girse catch de girse finally son blok olarak tetiklenir.
			});
		// fetch('uri', {
		// 	method: 'Post',
		// 	body: JSON.stringify({ id: 1 }),
		// 	headers: { Authorizetion: 'Bearer Token', ApiKey: 'Key' },
		// });
	}, []);

	// [] boş ise component mount edildiğinde 1 kez çalışır
	// veri çekme işlemleri component yüklendiğinde bu kod bloğuna yazılmalıdır
	// asenkron api haberleşmesi sağlamak için yazılmış.

	if (loading) return <>Veri Yükleniyor...</>;

	if (error) return <>Sayfa yüklenirken bir hata meydana geldi</>;

	return (
		<>
			<h1>Users Page</h1>
			{data.map((item: User) => (
				<div>{item.username}</div>
			))}
		</>
	);
}

export default UsersPage;
