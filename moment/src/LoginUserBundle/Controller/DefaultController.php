<?php

namespace LoginUserBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('LoginUserBundle:Default:index.html.twig');
    }
}
