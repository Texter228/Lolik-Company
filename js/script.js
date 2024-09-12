document.getElementById('download-button-survavle-Pc').addEventListener('click', function() {
    // Задайте URL для файла, который нужно скачать
    const fileUrl = 'Downloads/Pc/Games/Survavle on island.exe';
    
    // Создайте элемент <a> и настройте его для скачивания
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = ''; // Имя файла по умолчанию, если нужно можно задать его явно
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

document.getElementById('download-button-survavle-Phone').addEventListener('click', function() {
    // Задайте URL для файла, который нужно скачать
    const fileUrl = 'Downloads/Phone/survavle on island.apk';
    
    // Создайте элемент <a> и настройте его для скачивания
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = ''; // Имя файла по умолчанию, если нужно можно задать его явно
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

document.getElementById('download-button-redlight').addEventListener('click', function() {
    // Задайте URL для файла, который нужно скачать
    const fileUrl = 'Downloads/Pc/Cheats/RedLight.zip';
    
    // Создайте элемент <a> и настройте его для скачивания
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = ''; // Имя файла по умолчанию, если нужно можно задать его явно
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});