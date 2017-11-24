<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Criteria;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use JMS\Serializer\Annotation\Groups;
use JMS\Serializer\Annotation\VirtualProperty;
use JMS\Serializer\Annotation\SerializedName;

/**
 * Kategori
 *
 * @ORM\Table(name="app_kategori")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\KategoriRepository")
 * @ORM\HasLifecycleCallbacks
 */
class Kategori {

    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"kategori_list"})
     */
    private $id;

    /**
     * @ORM\Column(name="created_at", type="datetime")
     */
    protected $createdAt;

    /**
     * @ORM\Column(name="updated_at", type="datetime")
     */
    protected $updatedAt;

    /**
     * @ORM\Column(name="is_active", type="boolean")
     */
    protected $isActive;

    /**
     * @var string
     *
     * @ORM\Column(name="title", type="string", length=150)
     * @Groups({"kategori_list"})
     */
    protected $title;

    /**
     * @ORM\ManyToOne(targetEntity="LoginUserBundle\Entity\User",inversedBy="appKategori")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    protected $userKategori;

    /**
     * @var Kategori
     *
     * @ORM\OneToMany(targetEntity="Kategori", mappedBy="parent")
     */
    private $children;

    /**
     * @var ArrayCollection
     *
     * @ORM\ManyToOne(targetEntity="Kategori", inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id", onDelete="CASCADE")
     */
    protected $parent;

    public function __construct() {
        $this->isActive = true;
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->children = new ArrayCollection();
    }

    /**
     * @ORM\PreUpdate()
     */
    public function preUpdate() {
        $this->updatedAt = new \DateTime();
    }

    /**
     * Get id
     *
     * @return integer
     */
    public function getId() {
        return $this->id;
    }

    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     *
     * @return Kategori
     */
    public function setCreatedAt($createdAt) {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime
     */
    public function getCreatedAt() {
        return $this->createdAt;
    }

    /**
     * Set updatedAt
     *
     * @param \DateTime $updatedAt
     *
     * @return Kategori
     */
    public function setUpdatedAt($updatedAt) {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Get updatedAt
     *
     * @return \DateTime
     */
    public function getUpdatedAt() {
        return $this->updatedAt;
    }

    /**
     * Set isActive
     *
     * @param boolean $isActive
     *
     * @return Kategori
     */
    public function setIsActive($isActive) {
        $this->isActive = $isActive;

        return $this;
    }

    /**
     * Get isActive
     *
     * @return boolean
     */
    public function getIsActive() {
        return $this->isActive;
    }

    /**
     * Set title
     *
     * @param string $title
     *
     * @return Kategori
     */
    public function setTitle($title) {
        $this->title = $title;

        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle() {
        return $this->title;
    }

    /**
     * Set userKategori
     *
     * @param \LoginUserBundle\Entity\User $userKategori
     *
     * @return Kategori
     */
    public function setUserKategori(\LoginUserBundle\Entity\User $userKategori = null) {
        $this->userKategori = $userKategori;

        return $this;
    }

    /**
     * Get userKategori
     *
     * @return \LoginUserBundle\Entity\User
     */
    public function getUserKategori() {
        return $this->userKategori;
    }

    /**
     * Add child
     *
     * @param \LatihanBundle\Entity\Kategori $child
     *
     * @return Kategori
     */
    public function addChild(\AppBundle\Entity\Kategori $child) {
        $this->children[] = $child;

        return $this;
    }

    /**
     * Remove child
     *
     * @param \LatihanBundle\Entity\Kategori $child
     */
    public function removeChild(\AppBundle\Entity\Kategori $child) {
        $this->children->removeElement($child);
    }

    /**
     * Get children
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getChildren() {
        return $this->children;
    }

    /**
     * Set parent
     *
     * @param \LatihanBundle\Entity\Kategori $parent
     *
     * @return Kategori
     */
    public function setParent(\AppBundle\Entity\Kategori $parent = null) {
        $this->parent = $parent;

        return $this;
    }

    /**
     * Get parent
     *
     * @return \LatihanBundle\Entity\Kategori
     */
    public function getParent() {
        return $this->parent;
    }

}
