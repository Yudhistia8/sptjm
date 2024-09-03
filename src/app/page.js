import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div>
          <h1>Cara menggunakan :</h1>
          <div className='flex flex-col gap-5'>
              <span>
              <h2>1. Downlaod Excell SPTJM pengganti/perwakilan</h2>
              <Image src='/sptjm/step_1.png' alt='step 1' width={800} height={800}/>
              <p>* download excel sesuai dengan apa yang kalian kerjakan</p>
              </span>
              <span>
              <h2>2. Masukan excell ke dalam inputan *warna merah</h2>
              <Image src='/sptjm/all.png' alt='step 2' width={1000} height={1000}/>
                  <h2>3. Cari kecamatan dan kelurahan yang akan kalian kerjakan *warna hijau</h2>
                  <h2>4. Jika data tidak muncul tekan paggination *warna orange</h2>
                  <h2>5. Makan data mucul di table</h2>
                  <h2>6. *warna biru adalah tombol navigasi , jika ingin mengerjakan SPTJM pengganti dan SPTJM perwakilan</h2>
                  <h2>7. Ketiak data sudah muncul salin data di dalam table</h2>
              <Image src='/sptjm/copt_table.png' alt='step 1' width={800} height={800}/>
                  <h2>8. Tempel Table Ke word</h2>
              <Image src='/sptjm/paset_2.png' alt='step 1' width={800} height={800}/>
<p className='text-xl font-bold'>* jangan lupa rapikan tampilan dan cek lagi apakah data sudah benar apatau belum karena aplikasi ini tidak 100% benar</p>
              </span>
          </div>
          <Footer/>
      </div>
  );
}
