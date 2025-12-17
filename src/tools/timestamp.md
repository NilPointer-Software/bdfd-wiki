# Timestamp Converter

<style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f7fa;
        }
        .container {
            background-color: white;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
        }
        .converter-section {
            margin-bottom: 30px;
            padding: 20px;
            border-radius: 8px;
            background-color: #f8f9fa;
        }
        .converter-section h2 {
            color: #3498db;
            margin-top: 0;
            font-size: 1.3em;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        label {
            font-weight: bold;
            display: block;
            margin-bottom: 8px;
            color: #34495e;
        }
        input {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border: 2px solid #ddd;
            border-radius: 6px;
            box-sizing: border-box;
            transition: border-color 0.3s;
        }
        input:focus {
            outline: none;
            border-color: #3498db;
        }
        .result {
            margin-top: 15px;
            padding: 15px;
            background-color: #2c3e50;
            color: white;
            border-radius: 6px;
            font-size: 18px;
            font-weight: bold;
            word-break: break-all;
            min-height: 50px;
            display: flex;
            align-items: center;
        }
        .result span {
            color: #1abc9c;
        }
        .icon {
            display: inline-block;
            margin-right: 10px;
            font-size: 20px;
        }
        .timestamp {
            font-size: 14px;
            color: #7f8c8d;
            margin-top: 5px;
        }
        .current-time {
            text-align: center;
            padding: 15px;
            background-color: #ecf0f1;
            border-radius: 6px;
            margin-top: 20px;
            font-weight: bold;
            color: #2c3e50;
        }
</style>

<div class="container">
        <h1>📅 Unix Time Converter</h1>
        
        <div class="converter-section">
            <h2><span class="icon">📅</span> Date to Unix Time</h2>
            <label for="datetimepicker">Select date and time:</label>
            <input type="datetime-local" id="datetimepicker">
            
            <label>Unix Timestamp (seconds):</label>
            <div class="result">
                <span id="unixtime-display">0</span>
                <div class="timestamp" id="timestamp-info"></div>
            </div>
        </div>
        
        <div class="converter-section">
            <h2><span class="icon">⏰</span> Unix Time to Date</h2>
            <label for="unix-input">Enter Unix Timestamp (seconds):</label>
            <input type="number" id="unix-input" placeholder="e.g., 1704067200">
            
            <label>Date and Time:</label>
            <div class="result">
                <span id="date-display">Not set</span>
                <div class="timestamp" id="date-info"></div>
            </div>
        </div>
        
        <div class="current-time">
            <span id="current-time"></span>
        </div>
</div>

<script>
        // Элементы для конвертации из даты в Unix Time
        const datetimePicker = document.getElementById('datetimepicker');
        const unixTimeDisplay = document.getElementById('unixtime-display');
        const timestampInfo = document.getElementById('timestamp-info');
        
        // Элементы для конвертации из Unix Time в дату
        const unixInput = document.getElementById('unix-input');
        const dateDisplay = document.getElementById('date-display');
        const dateInfo = document.getElementById('date-info');
        
        // Элемент для отображения текущего времени
        const currentTimeEl = document.getElementById('current-time');
        
        // Устанавливаем текущую дату и время по умолчанию
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        
        datetimePicker.value = `${year}-${month}-${day}T${hours}:${minutes}`;
        
        // Устанавливаем текущий Unix Time по умолчанию
        const currentUnixTime = Math.floor(now.getTime() / 1000);
        unixInput.value = currentUnixTime;
        
        // Инициализируем оба конвертера
        updateUnixTime();
        updateDateFromUnix();
        
        // Обработчики событий
        datetimePicker.addEventListener('input', updateUnixTime);
        unixInput.addEventListener('input', updateDateFromUnix);
        
        // Функция для обновления текущего времени
        function updateCurrentTime() {
            const now = new Date();
            const timeString = now.toLocaleString();
            const unixTime = Math.floor(now.getTime() / 1000);
            currentTimeEl.textContent = `Current time: ${timeString} (Unix: ${unixTime})`;
        }
        
        // Функция для конвертации даты в Unix Time
        function updateUnixTime() {
            const selectedDate = new Date(datetimePicker.value);
            
            if (!isNaN(selectedDate.getTime())) {
                const unixTime = Math.floor(selectedDate.getTime() / 1000);
                const dateString = selectedDate.toLocaleString();
                
                unixTimeDisplay.textContent = unixTime;
                timestampInfo.textContent = `Selected: ${dateString}`;
                
                // Обновляем второй конвертер для синхронизации
                if (parseInt(unixInput.value) !== unixTime) {
                    unixInput.value = unixTime;
                    updateDateFromUnix();
                }
            }
        }
        
        // Функция для конвертации Unix Time в дату
        function updateDateFromUnix() {
            const unixTime = parseInt(unixInput.value);
            
            if (!isNaN(unixTime) && unixTime >= 0) {
                // Умножаем на 1000, потому что JavaScript работает с миллисекундами
                const date = new Date(unixTime * 1000);
                
                if (!isNaN(date.getTime())) {
                    const dateString = date.toLocaleString();
                    const isoString = date.toISOString().replace('T', ' ').substring(0, 19);
                    
                    dateDisplay.textContent = dateString;
                    dateInfo.textContent = `ISO: ${isoString}`;
                    
                    // Обновляем первый конвертер для синхронизации
                    // Форматируем дату для datetime-local input
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    const hours = String(date.getHours()).padStart(2, '0');
                    const minutes = String(date.getMinutes()).padStart(2, '0');
                    
                    const datetimeLocalValue = `${year}-${month}-${day}T${hours}:${minutes}`;
                    
                    if (datetimePicker.value !== datetimeLocalValue) {
                        datetimePicker.value = datetimeLocalValue;
                    }
                }
            } else if (unixInput.value === '') {
                dateDisplay.textContent = 'Not set';
                dateInfo.textContent = '';
            } else {
                dateDisplay.textContent = 'Invalid timestamp';
                dateInfo.textContent = 'Please enter a valid Unix timestamp';
            }
        }
        
        // Инициализация текущего времени и таймер
        updateCurrentTime();
        setInterval(updateCurrentTime, 1000);
        
        // Добавляем обработчик для клавиши Enter в Unix Time поле
        unixInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                updateDateFromUnix();
            }
        });
        
        // Добавляем кнопки для быстрого ввода
        document.addEventListener('DOMContentLoaded', function() {
            // Создаем контейнер для кнопок быстрого выбора
            const quickButtons = document.createElement('div');
            quickButtons.style.marginTop = '10px';
            quickButtons.style.display = 'flex';
            quickButtons.style.gap = '10px';
            quickButtons.style.flexWrap = 'wrap';
            
            // Кнопки для быстрого выбора времени
            const times = [
                {label: 'Now', seconds: 0},
                {label: '1 hour ago', seconds: -3600},
                {label: '1 day ago', seconds: -86400},
                {label: '1 week ago', seconds: -604800},
                {label: 'New Year 2024', seconds: 1704067200}
            ];
            
            times.forEach(time => {
                const button = document.createElement('button');
                button.textContent = time.label;
                button.style.padding = '8px 12px';
                button.style.border = 'none';
                button.style.borderRadius = '4px';
                button.style.backgroundColor = '#3498db';
                button.style.color = 'white';
                button.style.cursor = 'pointer';
                button.style.fontSize = '14px';
                
                button.addEventListener('click', function() {
                    let unixTime;
                    if (time.seconds === 0) {
                        unixTime = Math.floor(Date.now() / 1000);
                    } else if (time.seconds > 0) {
                        unixTime = time.seconds;
                    } else {
                        unixTime = Math.floor(Date.now() / 1000) + time.seconds;
                    }
                    
                    unixInput.value = unixTime;
                    updateDateFromUnix();
                });
                
                quickButtons.appendChild(button);
            });
            
            // Вставляем кнопки после поля ввода Unix Time
            unixInput.parentNode.insertBefore(quickButtons, unixInput.nextSibling);
        });
</script>