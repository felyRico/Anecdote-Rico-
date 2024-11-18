import { useState } from 'react'
import './App.css'

const App = () => {
  const data = [
    { id: 1, title: "Cerita 1: Bencana Pameran Sains", content: "Waktu SMP, kelas saya harus membangun gunung berapi untuk pameran sains. Saya sangat bersemangat dan berpikir saya memiliki rencana jenius: gunung berapi dengan lampu dan efek suara. Namun, ketika tiba saatnya untuk mempresentasikan, saya lupa memeriksa baterai untuk suaranya. Jadi, sementara gunung berapi saya meletus, yang dilakukannya hanyalah sedikit mendesis. Untuk menebusnya, saya mengambil gelas kimia soda dan berpura-pura desisnya adalah letusan yang sebenarnya, meyakinkan semua orang bahwa itu adalah 'sains mutakhir.'" },
    { id: 2, title: "Cerita 2: Kegagalan Kerja Kelompok", content: "Kami ditugaskan untuk kerja kelompok tentang penyebab Perang Dunia 2. Kelompok saya memiliki ide LUAR NALAR untuk tampilkannya sebagai acara bincang-bincang tiruan, tetapi dua anggota grup tidak pernah muncul untuk berlatih. Pada hari presentasi, kami kehilangan setengah dari kelompok, dan 'tamu' saya adalah potongan kardus. Saya harus ad-lib untuk seluruh segmen, tetapi entah bagaimana, guru kami masih memberi kami nilai yang layak untuk 'kreativitas'." },
    { id: 3, title: "Cerita 3: Kekacauan Kantin", content: "Di tahun kedua SMP saya, saya mencoba menembak seorang cewek dengan membelikannya makan siang. Masalahnya? Saya mengambil nampan dengan sepiring nasi goreng, tidak menyadari bahwa kantin telah mengubah rasa menjadi sesuatu yang pedas hari itu. Saat saya menyerahkan piring itu padanya, dia menggigit satu gigitan, wajahnya lansung memerah, dan dia hampir tersedak. Saya akhirnya membelikannya susu untuk menebusnya, tetapi dia tidak pernah membiarkan saya untuk move on." },
    { id: 4, title: "Cerita 4: Kepanikan Kuis", content: "Pada hari kuis tanpa pemberitahuan, saya panik dan akhirnya duduk diam, menatap kertas. tengah-tengah mengkerjakan, saya menyadari bahwa saya sudah tahu jawabannya tetapi say meragukan diri saya sendiri karena saya gugup. Saya belajar bahwa terkadang instink pertama Anda adalah yang benar." },
    { id: 5, title: "Cerita 5: Proyek Menit Terakhir", content: "Saya memiliki tugas berkelompok yang harus selesai keesokan harinya, dan tidak ada dari kami yang melakukan apa pun sampai malam sebelumnya. Kami begadang sampai jam 3 pagi mengerjakannya, hampir tidak selesai tepat waktu. Keesokan harinya, guru kami memuji kami karena hasilnya bagus. Kami semua setuju bahwa kami seharusnya memulai lebih awal, tetapi kami bangga kami melakukannya." },
    { id: 6, title: "Cerita 6: Persahabatan yang Tak Terduga", content: "Di kelas PJOK, saya selalu dipilih terakhir untuk tim. Suatu hari, seorang siswa yang merupakan atlet melihat kepada saya dan berkata, 'Kamu bersama saya hari ini.' Kami akhirnya bekerja sama dengan sangat baik, dan momen itu memicu persahabatan tak terduga yang berlangsung sepanjang SMP." },
    { id: 7, title: "Cerita 7: Lupa Esai", content: "Saya pernah lupa menyerahkan esai besar dan sangat takut mendapatkan nilai buruk. Guru memperhatikan dan menelepon saya setelah kelas. Alih-alih memberi saya penalti, dia menawarkan saya kesempatan untuk Kerjakan ulang, mengajari saya bahwa guru bisa lebih pengertian daripada yang kita pikirkan jika kita jujur kepada mereka." },
    { id: 8, title: "Cerita 8: Persahabatan yang Kelihatan Tidak Mungkin", content: "Di tahun kedua SMP lagi, saya berteman dengan seseorang dari kelompok yang sama sekali berbeda. Saya dikenal pendiam, dan dia adalah badut kelas. Suatu hari, kami dipasangkan untuk proyek sejarah dan akhirnya terikat karena kecintaan kami yang sama pada anime. Ternyata terlepas dari perbedaan kami, kami memiliki banyak kesamaan, dan kami akhirnya nongkrong setiap akhir pekan setelah itu." },
    { id: 9, title: "Cerita 9: Hilang, Hilang", content: "Ada seorang siswa di kelas saya yang pintar, dan saya tidak bisa berhenti memikirkannya. Saya mencoba mencari alasan untuk berbicara dengannya, tetapi saya terlalu malu untuk mengajaknya berkencan. Suatu hari, dia dengan santai mengatakan bahwa dia tahu saya punya perasaan untuk dia, dan dia lansung menolak saya. Saat itu, saya menyadari bahwa saya telah menghabiskan seluruh semester untuk naksir seseorang yang tidak tahu." },
    { id: 10, title: "Cerita 10: Identitas yang Keliru", content: "Dalam salah satu perjalanan sekolah kami, seorang guru mengira saya sebagai siswa lain. Dia memanggil saya untuk menjawab pertanyaan yang bukan milik saya untuk dijawab. Malu, saya mengoreksinya, tetapi kemudian setiap siswa mulai memanggil saya dengan nama siswa lain selama sisa perjalanan. Saya bermain sebentar, karena, sejujurnya, itu tidak terlalu canggung daripada menjelaskan situasinya berulang kali." },
  ];

  const [expandedBox, setExpandedBox] = useState(null);

  const toggleExpand = (id) => {
    setExpandedBox(expandedBox === id ? null : id);
  };
  
  return (
    <>
      <div className="top" style={{ display: "block", textAlign: "center", backgroundColor: "#79EBA3", fontFamily: "Courier New, Courier, monospace" }}>
        <h2 style={{ display: "block", margin: "0" }}>Kumpulan Anekdot</h2>
        <p style={{ display: "block", margin: "0" }}>Oleh Frederico Sarren</p>
      </div>
      <div className="grid-container">
        {data.map((item) => (
          <div
            key={item.id}
            className={`grid-item ${expandedBox === item.id ? "expanded" : ""}`}
            onClick={() => toggleExpand(item.id)}
          >
            <h3>{item.title}</h3>
            {expandedBox === item.id && <p>{item.content}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default App
