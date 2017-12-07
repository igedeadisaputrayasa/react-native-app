<?php

namespace APIAppBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use FOS\RestBundle\Context\Context;
use FOS\RestBundle\Controller\Annotations\Get;
use FOS\RestBundle\Controller\Annotations\Post;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Respect\Validation\Validator as RValidation;

class UserController extends FOSRestController
{
    
  /**
  * @Get("/lists")
  * @Route(options={"expose"=true})
  * @ApiDoc(
  *   resource=true,
  *   description="Show All User List",
  * statusCode={
  *   200 = "Success",
  *   505 = "Internal Server Error",
  *   401 = "Unauthorized"
  * },
  * output={
  *   "class"="\LoginUserBundle\Entity\User",
  *   "groups"={"api_user_lists"},
  *   "parsers"={
  *     "Nelmio\ApiDocBundle\Parser\JmsMetadataParser"
  *   }
  * }
  * )
  */
  public function apiUserListsAction()
  {
    $code = null;
    $messages = array();
    $em = $this->getDoctrine()->getManager();

    $users = null;
    $users = $em->getRepository('LoginUserBundle:User')->findAll();
    if($users){
      $code = 200;
    }

    #CREATE RESPONSE ARRAY;
    $data = array(
      "code" => $code,
      "messages" => $messages,
      "users" => $users
    );
    switch ($code) {
      case 200:
        $view = $this->view($data, $code);
        $groups_entity = array("api_user_lists");
        $context = new Context();
        $view->setContext($context->setGroups($groups_entity));
        return $this->handleView($view);
        break;
      default:
        $view = $this->view($data, 404);
        return $this->handleView($view);
        break;
    }    
  }
}
