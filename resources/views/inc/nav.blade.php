<nav class="bg-white flex items-center justify-between lg:px-16 md:px-16 px-10 py-2">
    <div class="flex items-center">
        <a href="/">
          <img src="{{ asset('img/logo/logo.png') }}" alt="" class=" object-cover mr-5" style="width:50px;">
        </a>
    </div>
    <ul class="lg:flex md:flex hidden items-center text-medium">
        <li class="mx-4">
            <a href="https://wa.me/qr/D3XXGQRFEAPUN1" class="flex items-center">
              <i class="ri-phone-line mr-2"></i>
              09034597758
            </a>
        </li>
        <li class="mx-4">
          <?php 
            $state = '{{ $store.state.auth.url }}';
          ?>
          
          
            <a v-if="!$store.state.auth.url" href="/login">Login</a>
          
            <a v-else :href="$store.state.auth.url.url">Dashboard</a>
          
        </li>
        <li class="mx-4 bg-warning py-2 px-6 rounded flex items-center text-white">
            <a href="/tutor/register">Become a tutor</a>
        </li>
        
    </ul>

    <ul class="lg:hidden md:hidden flex">
      
      <li class="bg-warning py-2 px-3 rounded flex items-center text-white">
          <a href="/tutor/register">Become a tutor</a>
      </li>
  </ul>
</nav>

{{-- <app-navbar :data="mobileNav"/> --}}
