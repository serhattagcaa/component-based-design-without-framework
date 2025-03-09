# Component Based Design Without Framework

Bu proje, framework kullanmadan bileşen tabanlı web tasarımını sergilemek için oluşturulmuştur. HTML, CSS ve JavaScript kullanarak sade ve etkili bir web sitesi geliştirilmiştir.

## Proje Yapısı

Bu projede kullanılan teknolojilerin oranları:
- **CSS**: %50.7
- **HTML**: %39.6
- **JavaScript**: %9.7

## Başlarken

Projenin bir kopyasını yerel makinenize klonlamak için aşağıdaki adımları izleyin:

### Gereksinimler

- Bir web tarayıcısı (Chrome, Firefox, Edge, vb.)
- Bir kod editörü (VSCode, Sublime Text, vb.)

### Kurulum

1. Bu repoyu klonlayın:

    ```sh
    git clone https://github.com/serhattagcaa/component-based-design-without-framework.git
    ```

2. Proje dizinine gidin:

    ```sh
    cd component-based-design-without-framework
    ```

3. `index.html` dosyasını tarayıcınızda açarak projeyi görüntüleyin.

## Kullanılan Teknolojiler

- **HTML**: Sayfanın temel yapısını oluşturur.
- **CSS**: Sayfanın stil ve düzenlemesini sağlar.
- **JavaScript**: Dinamik içerik ve etkileşimler ekler.

## Dosya Yapısı

- `index.html`: Ana sayfa dosyası.
- `style.css`: Stil dosyası.
- `navbar.js`: Dinamik gezinme çubuğu oluşturma dosyası.
- `script.js`: Diğer JavaScript fonksiyonları.

## Bileşenler

### Navbar

`navbar.js` dosyası, gezinme çubuğunu dinamik olarak oluşturur ve `header` içindeki `nav` öğesine ekler. `index.html` dosyasında `nav` öğesi başlangıçta boştur, ancak JavaScript dosyası çalıştığında bu öğe doldurulur.

```html
<nav>
  <!-- Navbar will be injected here via JavaScript -->
</nav>
