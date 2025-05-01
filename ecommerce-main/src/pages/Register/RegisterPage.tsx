import React, { useState } from 'react';
import IRegisterModel from '../../models/IRegisterModel';

function RegisterPage() {
	// Kullanıcıdan alınan form verilerini tutmak için bir state oluşturuyoruz
	const [formData, setFormData] = useState<IRegisterModel>({
		name: '',
		telephone: '',
		email: '',
		password: '',
		rePassword: ''
	});

	// Input değerleri değiştiğinde çağrılacak fonksiyon
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		// Eski state'i koruyarak sadece ilgili input alanını güncelliyoruz
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	// Form gönderildiğinde çalışan fonksiyon
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault(); // Sayfanın yeniden yüklenmesini engelliyoruz

		// Şifreler eşleşmiyorsa kullanıcıyı uyar
		if (formData.password !== formData.rePassword) {
			alert("Şifreler eşleşmiyor!");
			return;
		}

		try {
			// Kullanıcı verilerini backend'e POST ile gönderiyoruz
			const response = await fetch('http://34.10.50.108:9090/dev/v1/user/register-user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData) // JSON formatında veri gönderiyoruz
			});

			const result = await response.json(); // Backend'den dönen cevabı alıyoruz

			// Başarılı cevap geldiyse kullanıcıyı bilgilendir
			if (result.data) {
				alert("Kayıt başarılı!");
			} else {
				alert("Kayıt başarısız.");
			}
		} catch (error) {
			// Herhangi bir hata durumunda kullanıcıya mesaj göster
			console.error("Hata:", error);
			alert("Bir hata oluştu.");
		}
	};

	return (
		<div className="wrapper" style={{ backgroundImage: 'url("/img/bg-registration-form-2.jpg")' }}>
			<div className="inner">
				<form onSubmit={handleSubmit}>
					<h3>Registration Form</h3>

					{/* Ad ve telefon alanları */}
					<div className="form-group">
						<div className="form-wrapper">
							<label>Full Name</label>
							<input
								type="text"
								className="form-control"
								name="name"
								value={formData.name}
								onChange={handleChange} // Değer değiştikçe state güncellenir
							/>
						</div>
						<div className="form-wrapper">
							<label>Telephone</label>
							<input
								type="text"
								className="form-control"
								name="telephone"
								value={formData.telephone}
								onChange={handleChange}
							/>
						</div>
					</div>

					{/* Email alanı */}
					<div className="form-wrapper">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							name="email"
							value={formData.email}
							onChange={handleChange}
						/>
					</div>

					{/* Şifre alanları */}
					<div className="form-wrapper">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							name="password"
							value={formData.password}
							onChange={handleChange}
						/>
					</div>

					<div className="form-wrapper">
						<label>Confirm Password</label>
						<input
							type="password"
							className="form-control"
							name="rePassword"
							value={formData.rePassword}
							onChange={handleChange}
						/>
					</div>

					{/* Gizlilik sözleşmesi checkbox (şu anlık kontrol edilmiyor) */}
					<div className="checkbox">
						<label>
							<input type="checkbox" /> I accept the Terms of Use & Privacy Policy.
							<span className="checkmark"></span>
						</label>
					</div>

					{/* Formu gönder butonu */}
					<button type="submit">Register Now</button>

					{/* Login sayfasına yönlendirme */}
					<div className="form-wrapper mt-3 text-center">
						<a href="/login">Go to Login</a>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RegisterPage;
