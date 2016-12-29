import {provideRoutes, Routes} from '@angular/router';
import { RouterModule } from '@angular/router';
import  {SearchComponent} from './components/search/search.component';
import  {AboutComponent} from './components/about/about.component';
import  {ArtistComponent} from './components/artist/artist.component';
import  {AlbumComponent} from './components/album/album.component';

const routes: Routes = [
	{path:'artist/:id', component:ArtistComponent},
	{path:'about', component:AboutComponent},
	{path:'albums/:id', component:AlbumComponent},
	{path:'', component:SearchComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
});
export class AppModule { }