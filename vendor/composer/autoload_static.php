<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitfa27066e2f771f18c6ce6612457efbd1
{
    public static $files = array (
        '90c7ecedda3d4ffc2ea2846d48066bcc' => __DIR__ . '/..' . '/cmb2-user-select/cmb2-user-select.php',
        '539404895269c9c6dba96d32bdf0061b' => __DIR__ . '/..' . '/cmb2/init.php',
    );

    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitfa27066e2f771f18c6ce6612457efbd1::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitfa27066e2f771f18c6ce6612457efbd1::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}