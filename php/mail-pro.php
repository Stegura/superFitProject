<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    // Load Composer's autoloader
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);
    $mail->CharSet = 'utf-8';

    $name = $_POST['name-pro'];
    $phone = $_POST['phone-pro'];
    $email = $_POST['e-mail-pro'];

    //Server settings
    $mail->SMTPDebug = 2;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';                     // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'testboxdanylo@gmail.com';              // SMTP username
    $mail->Password   = '';                         // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('testboxdanylo@gmail.com', 'SuperForma');
    $mail->addAddress($email, $name);     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    $mail->addBCC('testboxdanylo@gmail.com');

    header('location: ../html/thank-you.html');
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'СуперФорма Online';
    $mail->Body    = '<head>
        <style>
            body {
                background: linear-gradient(to left,#240304, #5C0609);
            }
            h2 {
                text-align: center;
            }
            p {
                text-align: center;
                color: black;
                font-size: 18px;
                font-weight: 500;
                margin: 20px 0;
                line-height: 20px;
            }
            span {
                color: #ee105a;
                font-weight: 600;
            }
            a {
                border-color: #f00a41;
                border-radius: 25px;
                background-color: #f00a41;
                color: #f9fbff;
                font-size: 16px;
                margin: 0 auto;
                padding: 12px 20px;
                text-align: center;
                text-decoration: none;
                text-transform: uppercase;
            }
            a:hover {
                border-color: #d8093a;
                background-color: #d8093a;
                box-shadow: 1px 1px 3px 0px #505050;
                margin-top: -2px;
                margin-bottom: 2px;
                transition: 0.2s all;
            }
            table {            
                background: rgba(237, 196, 202, 0.1);
                box-shadow: 1px 1px 4px 0px rgba(80, 80, 80, 0.75);
                border-radius: 16px;
                flex-basis: 300px;
                margin: 10px auto;
                padding: 40px 20px;
            }
            td {
                font-size: 18px;
                font-weight: 500;
                line-height: 20px;
                padding: 4px 0;
            }
        </style>
    </head>
    <body>
        <table height="22px">
            <caption>
                <h1>Привіт, '.$name .',<br> Вас відатє <span>СуперФорма OnLine</span></h1><br><h2>Ви обрали пакет <span>PRO</span></h2>
            </caption>
            <tr>
                <th>В даний пакет входить</th>
            </tr>
            <tr><td>
                <span>#</span>
                Доступ до курсу
            </td></tr>
            <tr><td>
                <span>#</span>
                Домашні завдання та первірка їх виконання
            </td></tr>
            <tr><td>
                <span>#</span>
                Індивідуальне меню харчування, розроблене для безпечного схуднення
            </td></tr>
            <tr><td>
                <span>#</span>
                Коучинг "Основні принципи здорого способу життя"
            </td></tr>
            <tr><td>
                <span>#</span>
                Круті відео тренувань в домашніх умовах
            </td></tr>
            <tr><td>
                <span>#</span>
                Закритий чат для учасників
            </td></tr>
            <tr><td>
                <span>#</span>
                Мотивація та підтримка 24/7
            </td></tr>
            <tr><td>
                <h2>
                    690 грн./міс
                </h2>
            </td></tr>
            <tr><td align="center">
                <a href="">
                    Оплатити
                </a>
            </td></tr>
            <tr><td>
                <p>
                    Після оплати ми зв\'яжемось з вами за цим номером' .$phone. ' ,<br>
                    Та уточнемо деталі, для розробки меню для Вас
                </p>
            </td></tr>
        </table>
    </body>';

    if(!$mail->send()) {
        echo 'Error';
    } else {
    }
    ?>