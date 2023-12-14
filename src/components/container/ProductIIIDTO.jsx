import React from 'react';

const ProductTableIII = ({ productData }) => {
  // Extract all unique loaiSanPhamName values
  const allLoaiSanPhamNames = productData.reduce((acc, item) => {
    item.sanPham_CountDTOs?.forEach((product) => {
      if (!acc.includes(product.loaiSanPhamName)) {
        acc.push(product.loaiSanPhamName);
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
            <th style={{ fontWeight: 'bold', textAlign: 'center', padding: '8px' }}>Mã CT</th>
            {allLoaiSanPhamNames.map((loaiSanPhamName, index) => (
              <th style={{ fontWeight: 'bold', textAlign: 'center', padding: '8px' }} key={index}>{loaiSanPhamName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {productData.map((item, index) => (
            <tr key={index}>
              <td style={{ textAlign: 'center', padding: '8px' }}>{item.maChuongTrinh}</td>
              {allLoaiSanPhamNames.map((loaiSanPhamName, index) => {
                if (loaiSanPhamName === 'Other Products Count') {
                  const otherProduct = productData?.find((p) => p.maChuongTrinh === item.maChuongTrinh);
                  return <td key={index} style={{ textAlign: 'center', padding: '8px' }}>{otherProduct ? otherProduct.otherProductsCount : 0}</td>;
                } else {
                  const product = item.sanPham_CountDTOs?.find((p) => p.loaiSanPhamName === loaiSanPhamName);
                  return <td key={index} style={{ textAlign: 'center', padding: '8px' }}>{product ? product.count : 0}</td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
  );
};

export default ProductTableIII;