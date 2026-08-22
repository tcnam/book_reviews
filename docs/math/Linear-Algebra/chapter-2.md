---
sidebar_position: 3
---

# Chương 2: Ma trận, định thức, hệ phương trình tuyến tính


## 1. Các khái niệm cơ bản và ví dụ

Định nghĩa 
- Ma trận cỡ m x n là bảng số thực hoặc phức hình chữ nhật có m và n cột 
- Ma trận 0 là ma trận mà tất cả các phần tử đều mang giá trị 0
- Ma trận chuyển vị là ma trận thu được khi chuyển hàng thành cột và ngược lại. VD: 
    - Ma trân A: $$A = (a_{ij})_{m \times n}$$
    - Chuyển vị ma trận A: $$A^T = (a_{ji})_{n \times m}$$
- Ma trận vuông: m=n và gọi là ma trận vuông cấp n
    - Các phần tử $$a_{11}, a_{22},...,a_{nn}$$ là đường chéo chính
- Ma trận chéo: $$ m = n, a_{ij} = 0, i != j$$
- Ma trận đơn vị: $$ m = n, a_{ij} = 0 \quad \forall i != j, a_{ii} = 1 \quad \forall i$$
- Ma trận tam giác trên (chỉ có nửa trên đường chéo chính mới có giá trị): $$ m = n, a_{ij} = 0 \quad \forall i > j$$
- Ma trận tam giác dưới (chỉ có nửa dưới đường chéo chính mới có giá trị): $$ m = n, a_{ij} = 0 \quad \forall i < j$$


## 2. Các phép toán đối với ma trận

Phép toán bằng nhau:
- $$ A = (a_{ij})_{m \times n}, \quad  B = (b_{ij})_{m \times n}$$ 
- $$ A = B \iff a_{ij} = b_{ij}, \quad \forall i,j $$

Phép toán cộng:
- $$ A = (a_{ij})_{m \times n}, \quad B = (b_{ij})_{m \times n}, \quad C = (c_{ij})_{m \times n} $$
- $$C = A + B \iff c_{ij} = a_{ij} + b_{ij}, \quad \forall i, j$$

Phép nhân ma trận với một số:
- $$ A = (a_{ij})_{m \times n} $$
- $$ 2A = (2a_{ij})_{m \times n} \quad \forall i, j  $$

Phép toán trừ:
- $$ A = (a_{ij})_{m \times n}, \quad B = (b_{ij})_{m \times n}, \quad C = (c_{ij})_{m \times n} $$
- $$ C = A - B \iff c_{ij} = a_{ij} - b_{ij}, \quad \forall i, j$$

Phép toán nhân:
- $$ A = (a_{ij})_{m \times p}, \quad B = (b_{ij})_{p \times n}, \quad C = (c_{ij})_{m \times n} $$
- $$ C = AB \quad với \quad c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{ip}b_{pj} \quad \forall i, j$$
- VD:
    - $$ A = \begin{pmatrix} 2 & -1 & 4 \\ 4 & 1 & 0\end{pmatrix}; \quad B = \begin{pmatrix} 1 & -2 & 2 \\ 3 & 0 & 1 \\ 2 & 4 & 3 \end{pmatrix}$$
    - $$ C = AB = \begin{pmatrix} 7 & 12 & 15 \\ 7 & -8 & 9 \end{pmatrix}$$

Phép toán nâng ma trận lên lũy thừa với ma trận vuông:
- $$ A^n = A.A\dots.A $$

Phép toán đa thức trên ma trận:
- $$ f(x) = a_{n}x^n + a_{n-1}x^{n-1} + \dots + a_{0} $$
- $$ A = (a_{ij})_{m \times m} $$
- $$ f(A) = a_{n}A^n + a_{n-1}A^{n-1} + \dots + a_{1}A + a_{0}I $$
- VD:
    - $$ f(x) = 2x^2 - 4x + 3, \quad A = \begin{pmatrix} 2 & -1 \\ 3 & 4\end{pmatrix}.\quad Tính \quad f(A) $$
    - $$ A^2 = \begin{pmatrix} 1 & -6 \\ 18 & 13\end{pmatrix}$$ 
    - $$ f(A) =  \begin{pmatrix} 2 & -12 \\ 36 & 26\end{pmatrix} + \begin{pmatrix} -8 & 4 \\ -12 & -16\end{pmatrix} + \begin{pmatrix} 3 & 0 \\ 0 & 3\end{pmatrix} = \begin{pmatrix} -3 & -8 \\ 24 & 13\end{pmatrix} $$

Các tính chất của phép toán


$$
\begin{pmatrix}
1 & 2 \\
3 & 4
\end{pmatrix}
$$