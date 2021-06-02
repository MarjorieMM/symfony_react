<?php

namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\Response;


class EmptyController
{
    public function __invoke()
    {
        return new Response();
    }
}

// controller pour empêcher la récupération de l'URI api/post/{id} par l'utilisateur