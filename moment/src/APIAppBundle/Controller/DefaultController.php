<?php

namespace APIAppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;

class DefaultController extends FOSRestController
{
    public function indexAction()
    {
      $data = array("hello" => "world");
      $view = $this->view($data);
      return $this->handleView($view);
    }
}
