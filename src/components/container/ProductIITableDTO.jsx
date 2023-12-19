import React from 'react';

const ProductTableII = ({ productData }) => {
  // Extract all unique loaiSp values
  const allLoaiSanPhamNames = productData?.reduce((acc, item) => {
    item.loaiSanPhamCounts.forEach((product) => {
      if (!acc.includes(product.loaiSp)) {
        acc.push(product.loaiSp);
      }
    });
    return acc;
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'center', float: 'left', width: '30%' }}>
        Bộ Khoa học và Công nghệ
        <br />
        Văn phòng các chương trình trọng điểm cấp Nhà nước
        <br />
        <span style={{ paddingTop: '10px' }}>-----------------------o0o------------------------</span>
      </div>
      <div style={{ padding: '5px 5px', float: 'left', width: '100%', textAlign: 'center' }}>
        <span id="sp" style={{ fontWeight: 'bold' }}>KẾT QUẢ THỰC HIỆN CÁC CHƯƠNG TRÌNH (BẢN 2) THUỘC CÁC CHƯƠNG TRÌNH TRỌNG ĐIỂM CẤP NHÀ NƯỚC<br /> ( Không tính các nhiệm vụ dừng thực hiện) </span>
      </div>

      <div style={{ textAlign: 'center', width: '100%', margin: '0 auto', clear: 'both' }}>
        <table style={{ margin: 'auto' }}>
          <thead>
            <tr>
              <th style={{ fontWeight: 'bold', textAlign: 'center', padding: '8px' }}>Mã CT</th>
              {allLoaiSanPhamNames?.map((loaiSp, index) => (
                <th style={{ fontWeight: 'bold', textAlign: 'center', padding: '8px' }} key={index}>{loaiSp}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {productData?.map((item, index) => (
              <tr key={index}>
                <td style={{ textAlign: 'center', padding: '8px' }}>{item.maChuongTrinh}</td>
                {allLoaiSanPhamNames?.map((loaiSp, index) => {
                  const product = item.loaiSanPhamCounts?.find((p) => p.loaiSp === loaiSp);
                  return <td style={{ textAlign: 'center', padding: '8px' }} key={index}>{product ? product.count : 0}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default ProductTableII;