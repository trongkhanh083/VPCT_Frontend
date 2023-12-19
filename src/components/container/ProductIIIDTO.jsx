import React from 'react';

const ProductTableIII = ({ productData }) => {
  // Extract all unique loaiSp values
  const allLoaiSanPhamNames = productData?.reduce((acc, curr) => {
    curr.loaiSanPhamCounts.forEach((item) => {
      if (!acc.includes(item.loaiSp)) {
        acc.push(item.loaiSp);
      }
    });
    return acc;
  }, []);
  allLoaiSanPhamNames.push('Sản phẩm khác');

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
        <span id="sp" style={{ fontWeight: 'bold' }}>KẾT QUẢ THỰC HIỆN CÁC CHƯƠNG TRÌNH (BẢN 3) THUỘC CÁC CHƯƠNG TRÌNH TRỌNG ĐIỂM CẤP NHÀ NƯỚC<br /> ( Không tính các nhiệm vụ dừng thực hiện) </span>
      </div>

      <div style={{ textAlign: 'center', width: '100%', margin: '0 auto', clear: 'both' }}>
        <table style={{ margin: 'auto' }}>
          <thead>
            <tr>
              <th style={{ fontWeight: 'bold', textAlign: 'center', padding: '8px' }}>MaCt</th>
              {allLoaiSanPhamNames?.map((loaiSp, index) => (
                <th style={{ fontWeight: 'bold', textAlign: 'center', padding: '8px' }} key={index}>{loaiSp}</th>
              ))}
              <th style={{ fontWeight: 'bold', textAlign: 'center', padding: '8px' }}>Sản phẩm khác</th>
            </tr>
          </thead>
          <tbody>
            {productData?.map((data, index) => (
              <tr key={index}>
                <td style={{ textAlign: 'center', padding: '8px' }}>{data.maChuongTrinh}</td>
                {allLoaiSanPhamNames?.map((loaiSp, index) => {
                  const product = data.loaiSanPhamCounts.find((item) => item.loaiSp === loaiSp);
                  return <td style={{ textAlign: 'center', padding: '8px' }} key={index}>{product ? product.count : 0}</td>;
                })}
                <td style={{ textAlign: 'center', padding: '8px' }}>{data.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTableIII;
