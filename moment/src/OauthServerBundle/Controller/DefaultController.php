<?php

namespace OauthServerBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('OauthServerBundle:Default:index.html.twig');
    }
}
