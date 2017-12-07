<?php
// src/Acme/UserBundle/Entity/User.php
// Change the namespace according to the path in your project
namespace LoginUserBundle\Entity;

// Using FOSUserBundle 1.3x the user class will locate instead in :
// use FOS\UserBundle\Entity\User as BaseUser;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @var string $username
     * @Groups({"api_user_lists"})
     */
    protected $username;

    /**
     * @var appKategori
     *
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Kategori", mappedBy="userKategori")
     */
    private $appKategori;

    // Change the targetEntity path if you want to create the group

    /**
     * @ORM\ManyToMany(targetEntity="LoginUserBundle\Entity\Group")
     * @ORM\JoinTable(name="fos_user_user_group",
     *      joinColumns={@ORM\JoinColumn(name="user_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="group_id", referencedColumnName="id")}
     * )
     */
    protected $groups;

    public function __construct()
    {
        parent::__construct();
        // your own logic
    }

    /**
     * Add appKategori
     *
     * @param \AppBundle\Entity\Kategori $appKategori
     *
     * @return User
     */
    public function addAppKategori(\AppBundle\Entity\Kategori $appKategori)
    {
        $this->appKategori[] = $appKategori;

        return $this;
    }

    /**
     * Remove appKategori
     *
     * @param \AppBundle\Entity\Kategori $appKategori
     */
    public function removeAppKategori(\AppBundle\Entity\Kategori $appKategori)
    {
        $this->appKategori->removeElement($appKategori);
    }

    /**
     * Get appKategori
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getAppKategori()
    {
        return $this->appKategori;
    }
}
